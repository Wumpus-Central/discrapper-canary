n.d(e, { default: () => u }), n(704826), n(35282);
var a = n(255367);
n(73800);
var l = n(990547),
    r = n(481060),
    i = n(213609),
    s = n(313201),
    o = n(626135),
    c = n(988158),
    d = n(981631),
    x = n(388032),
    m = n(946555);
function u(t) {
    let { url: e, trustUrl: n, isProtocol: u, onConfirm: h, onCancel: p, onClose: k, transitionState: C } = t,
        _ = (0, s.Dt)(),
        {
            protocol: M,
            authorityPrefix: g,
            hostname: D,
            theRestOfTheUrl: b,
            shouldTrustUrl: f,
            setShouldTrustUrl: L,
            handleConfirm: j,
            handleCancel: z
        } = (0, c.X)({
            url: e,
            trustUrl: n,
            onConfirm: h,
            onCancel: p,
            onClose: k
        });
    return (
        (0, i.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL
        }),
        (0, a.jsxs)(r.Y0X, {
            size: r.CgR.DYNAMIC,
            transitionState: C,
            'aria-labelledby': _,
            parentComponent: 'MaskedLinkModal',
            children: [
                (0, a.jsxs)(r.hzk, {
                    children: [
                        (0, a.jsx)(r.X6q, {
                            id: _,
                            variant: 'heading-xl/bold',
                            className: m.title,
                            children: x.intl.string(x.t['3w1QGh'])
                        }),
                        (0, a.jsx)(r.Text, {
                            className: m.warningText,
                            variant: 'text-md/normal',
                            children: u ? x.intl.format(x.t.aCYv19, {}) : x.intl.string(x.t.soRxRU)
                        }),
                        (0, a.jsxs)(r.Ttm, {
                            className: m.linkCalloutContainer,
                            children: [
                                (0, a.jsxs)(r.Text, {
                                    tag: 'span',
                                    variant: u ? 'text-md/semibold' : 'text-md/normal',
                                    color: u ? 'text-normal' : 'text-muted',
                                    children: [M, g]
                                }),
                                (0, a.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: u ? 'text-md/normal' : 'text-md/semibold',
                                    color: u ? 'text-muted' : 'text-normal',
                                    children: D
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
                            onChange: (t, e) => L(e),
                            children: (0, a.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: u ? x.intl.format(x.t['haA+X1'], { protocol: M.replace(':', '') }) : x.intl.format(x.t.ZgXDsL, { domain: D })
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
                                j(),
                                    o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
                                        is_trust_url_selected: f,
                                        action_type: 'confirm'
                                    });
                            },
                            children: u ? x.intl.string(x.t.COq6kp) : x.intl.string(x.t.NcJfJC)
                        }),
                        (0, a.jsx)(r.zxk, {
                            type: 'button',
                            size: r.zxk.Sizes.MEDIUM,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: () => {
                                z(),
                                    o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
                                        is_trust_url_selected: f,
                                        action_type: 'cancel'
                                    });
                            },
                            look: r.iLD.LINK,
                            children: x.intl.string(x.t['/g10LC'])
                        })
                    ]
                })
            ]
        })
    );
}
