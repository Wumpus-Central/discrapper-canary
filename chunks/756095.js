n.d(t, {
    B: () => h,
    default: () => f,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(913527),
    a = n.n(l),
    o = n(793030),
    s = n(481060),
    c = n(45251),
    u = n(353077),
    d = n(618857),
    p = n(388032);
let h = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function f(e) {
    let { scheduledMessage: t, transitionState: n, onClose: l } = e,
        f = a()(t.sendAtTimestamp.substring(0, 200)),
        [m, g] = r.useState(f),
        [b, y] = r.useState(!1),
        C = async () => {
            y(!0);
            try {
                await (0, c.P4)(t.scheduledMessageId, m.toISOString()), (0, d.eD)(), (0, s.Mr3)(h);
            } catch (e) {
                (0, d.$X)(e.message);
            } finally {
                y(!1);
            }
        };
    return (0, i.jsx)(o.Modal, {
        transitionState: n,
        size: "md",
        title: p.intl.string(p.t.jbdHj3),
        onClose: l,
        actions: [
            {
                variant: "secondary",
                text: p.intl.string(p.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: p.intl.string(p.t.VZANAD),
                onClick: C,
                loading: b,
            },
        ],
        children: (0, i.jsx)(u.Z, {
            defaultValue: f,
            onChange: g,
        }),
    });
}
