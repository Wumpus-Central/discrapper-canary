n.d(s, { default: () => h });
var o = n(200651),
    t = n(192379),
    i = n(481060),
    r = n(367907),
    d = n(313889),
    c = n(177862),
    a = n(36459),
    l = n(981631),
    x = n(388032),
    k = n(141758);
function h(e) {
    let { automodDecision: s, transitionState: n, onClose: h } = e,
        u = t.useCallback(() => {
            (0, r.yw)(l.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.BUG,
                decision_id: s.decisionId,
                message_id: s.messageId,
                content: s.messageContent
            }),
                (0, a.Xx)(s.messageId, s.channel, d.d.SUBMIT_FEEDBACK),
                h();
        }, [s, h]);
    return (0, o.jsxs)(i.Y0X, {
        transitionState: n,
        size: i.CgR.SMALL,
        children: [
            (0, o.jsx)(i.xBx, {
                separator: !1,
                children: (0, o.jsx)(i.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: x.NW.string(x.t['7bdzNj'])
                })
            }),
            (0, o.jsx)(i.hzk, {
                children: (0, o.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: x.NW.string(x.t.Lbpk6u)
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
                            children: x.NW.string(x.t.p89ACg)
                        })
                    }),
                    (0, o.jsx)(i.zxk, {
                        onClick: h,
                        color: i.zxk.Colors.PRIMARY,
                        look: i.zxk.Looks.LINK,
                        children: x.NW.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
