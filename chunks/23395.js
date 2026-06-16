n.d(t, { B: () => S, default: () => E });
var a = n(627968),
    i = n(64700),
    s = n(989349),
    l = n.n(s),
    r = n(189213),
    d = n(192308),
    o = n(151282),
    u = n(388096),
    c = n(970244),
    m = n(375708);
let S = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function E(e) {
    let { scheduledMessage: t, transitionState: n, onClose: s } = e,
        E = l()(t.sendAtTimestamp.substring(0, 200)),
        [h, p] = i.useState(E),
        [g, f] = i.useState(!1),
        v = async () => {
            f(!0);
            try {
                await (0, o.Eg)(t.scheduledMessageId, h.toISOString()), (0, c.kb)(), (0, d.closeModal)(S);
            } catch (e) {
                (0, c.xP)(e.message);
            } finally {
                f(!1);
            }
        };
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        size: "md",
        title: m.intl.string(m.t.jbdHj3),
        onClose: s,
        actions: [
            { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: s },
            { variant: "primary", text: m.intl.string(m.t.VZANAD), onClick: v, loading: g },
        ],
        children: (0, a.jsx)(u.A, { defaultValue: E, onChange: p }),
    });
}
