n.d(e, { default: () => p });
var i = n(255367),
    s = n(73800),
    a = n(481060),
    r = n(367907),
    d = n(313889),
    o = n(177862),
    c = n(36459),
    l = n(981631),
    x = n(388032),
    h = n(141758);
function p(t) {
    let { automodDecision: e, transitionState: n, onClose: p } = t,
        u = s.useCallback(() => {
            ((0, r.yw)(l.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: o.x2.BUG,
                decision_id: e.decisionId,
                message_id: e.messageId,
                content: e.messageContent
            }),
                (0, c.Xx)(e.messageId, e.channel, d.d.SUBMIT_FEEDBACK),
                p());
        }, [e, p]);
    return (0, i.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.SMALL,
        parentComponent: 'AutomodSubmitFeedbackModal',
        children: [
            (0, i.jsx)(a.xBx, {
                separator: !1,
                children: (0, i.jsx)(a.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: x.intl.string(x.t['7bdzNj'])
                })
            }),
            (0, i.jsx)(a.hzk, {
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: x.intl.string(x.t.Lbpk6u)
                })
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)('div', {
                        className: h.button,
                        children: (0, i.jsx)(a.zxk, {
                            variant: 'primary',
                            text: x.intl.string(x.t.p89ACg),
                            onClick: u
                        })
                    }),
                    (0, i.jsx)(a.zxk, {
                        variant: 'secondary',
                        text: x.intl.string(x.t['ETE/oK']),
                        onClick: p
                    })
                ]
            })
        ]
    });
}
