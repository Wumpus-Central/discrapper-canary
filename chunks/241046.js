e.d(n, { default: () => p });
var i = e(255367),
    s = e(73800),
    a = e(82659),
    d = e(367907),
    c = e(313889),
    o = e(177862),
    l = e(36459),
    r = e(981631),
    u = e(388032);
function p(t) {
    let { automodDecision: n, transitionState: e, onClose: p } = t,
        C = s.useCallback(() => {
            (0, d.yw)(r.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: o.x2.BUG,
                decision_id: n.decisionId,
                message_id: n.messageId,
                content: n.messageContent,
            }),
                (0, l.Xx)(n.messageId, n.channel, c.d.SUBMIT_FEEDBACK),
                p();
        }, [n, p]);
    return (0, i.jsx)(a.Modal, {
        onClose: p,
        transitionState: e,
        title: u.intl.string(u.t["7bdzNj"]),
        subtitle: u.intl.string(u.t.Lbpk6u),
        actions: [
            {
                text: u.intl.string(u.t["ETE/oK"]),
                onClick: p,
                variant: "secondary",
            },
            {
                text: u.intl.string(u.t.p89ACg),
                onClick: C,
            },
        ],
    });
}
