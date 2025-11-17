e.d(n, { default: () => p });
var i = e(54381),
    s = e(473749),
    a = e(793030),
    d = e(367907),
    o = e(313889),
    c = e(177862),
    l = e(36459),
    r = e(981631),
    C = e(388032);
function p(t) {
    let { automodDecision: n, transitionState: e, onClose: p } = t,
        u = s.useCallback(() => {
            (0, d.yw)(r.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.BUG,
                decision_id: n.decisionId,
                message_id: n.messageId,
                content: n.messageContent,
            }),
                (0, l.Xx)(n.messageId, n.channel, o.d.SUBMIT_FEEDBACK),
                p();
        }, [n, p]);
    return (0, i.jsx)(a.Modal, {
        onClose: p,
        transitionState: e,
        title: C.intl.string(C.t["7bdzNo"]),
        subtitle: C.intl.string(C.t.Lbpk6m),
        actions: [
            {
                text: C.intl.string(C.t["ETE/oC"]),
                onClick: p,
                variant: "secondary",
            },
            {
                text: C.intl.string(C.t.p89ACt),
                onClick: u,
            },
        ],
    });
}
