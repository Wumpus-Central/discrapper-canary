t.d(n, { default: () => h });
var o = t(255367),
    s = t(73800),
    i = t(481060),
    r = t(367907),
    d = t(313889),
    a = t(177862),
    c = t(36459),
    l = t(981631),
    x = t(388032),
    k = t(141758);
function h(e) {
    let { automodDecision: n, transitionState: t, onClose: h } = e,
        u = s.useCallback(() => {
            ((0, r.yw)(l.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: a.x2.BUG,
                decision_id: n.decisionId,
                message_id: n.messageId,
                content: n.messageContent
            }),
                (0, c.Xx)(n.messageId, n.channel, d.d.SUBMIT_FEEDBACK),
                h());
        }, [n, h]);
    return (0, o.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.SMALL,
        parentComponent: 'AutomodSubmitFeedbackModal',
        children: [
            (0, o.jsx)(i.xBx, {
                separator: !1,
                children: (0, o.jsx)(i.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: x.intl.string(x.t['7bdzNj'])
                })
            }),
            (0, o.jsx)(i.hzk, {
                children: (0, o.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: x.intl.string(x.t.Lbpk6u)
                })
            }),
            (0, o.jsxs)(i.mzw, {
                children: [
                    (0, o.jsx)('div', {
                        className: k.button,
                        children: (0, o.jsx)(i.zxk, {
                            onClick: u,
                            color: i.zxk.Colors.BRAND,
                            look: i.zxk.Looks.FILLED,
                            children: x.intl.string(x.t.p89ACg)
                        })
                    }),
                    (0, o.jsx)(i.zxk, {
                        onClick: h,
                        color: i.zxk.Colors.PRIMARY,
                        look: i.zxk.Looks.LINK,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
