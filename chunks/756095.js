n.d(t, {
    B: () => f,
    default: () => h,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(913527),
    a = n.n(l),
    o = n(793030),
    s = n(481060),
    c = n(45251),
    u = n(353077),
    d = n(618857),
    p = n(388032);
let f = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function h(e) {
    let { scheduledMessage: t, transitionState: n, onClose: l } = e,
        h = a()(t.sendAtTimestamp.substring(0, 200)),
        [m, g] = i.useState(h),
        [b, _] = i.useState(!1),
        y = async () => {
            _(!0);
            try {
                await (0, c.P4)(t.scheduledMessageId, m.toISOString()), (0, d.eD)(), (0, s.Mr3)(f);
            } catch (e) {
                (0, d.$X)(e.message);
            } finally {
                _(!1);
            }
        };
    return (0, r.jsx)(o.Modal, {
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
                onClick: y,
                loading: b,
            },
        ],
        children: (0, r.jsx)(u.Z, {
            defaultValue: h,
            onChange: g,
        }),
    });
}
