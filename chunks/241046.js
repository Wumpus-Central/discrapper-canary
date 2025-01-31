s.d(n, { default: () => h });
var t = s(200651),
    i = s(192379),
    o = s(481060),
    r = s(367907),
    d = s(313889),
    c = s(177862),
    l = s(36459),
    a = s(981631),
    x = s(388032),
    k = s(303319);
function h(e) {
    let { automodDecision: n, transitionState: s, onClose: h } = e,
        u = i.useCallback(() => {
            (0, r.yw)(a.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.BUG,
                decision_id: n.decisionId,
                message_id: n.messageId,
                content: n.messageContent
            }),
                (0, l.Xx)(n.messageId, n.channel, d.d.SUBMIT_FEEDBACK),
                h();
        }, [n, h]);
    return (0, t.jsxs)(o.Y0X, {
        transitionState: s,
        size: o.CgR.SMALL,
        children: [
            (0, t.jsx)(o.xBx, {
                separator: !1,
                children: (0, t.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: x.intl.string(x.t['7bdzNj'])
                })
            }),
            (0, t.jsx)(o.hzk, {
                children: (0, t.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: x.intl.string(x.t.Lbpk6u)
                })
            }),
            (0, t.jsxs)(o.mzw, {
                children: [
                    (0, t.jsx)('div', {
                        className: k.button,
                        children: (0, t.jsx)(o.zxk, {
                            onClick: u,
                            color: o.zxk.Colors.BRAND,
                            look: o.zxk.Looks.FILLED,
                            children: x.intl.string(x.t.p89ACg)
                        })
                    }),
                    (0, t.jsx)(o.zxk, {
                        onClick: h,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
