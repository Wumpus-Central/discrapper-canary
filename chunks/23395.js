"use strict";
n.d(t, { B: () => E, default: () => A });
var i = n(477900),
    r = n(582128),
    a = n(989349),
    s = n.n(a),
    l = n(189213),
    o = n(192308),
    d = n(151282),
    c = n(388096),
    u = n(970244),
    _ = n(375708);
let E = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function A(e) {
    let { scheduledMessage: t, transitionState: n, onClose: a } = e,
        A = s()(t.sendAtTimestamp.substring(0, 200)),
        [h, I] = r.useState(A),
        [f, p] = r.useState(!1);
    async function T() {
        p(!0);
        try {
            await (0, d.Eg)(t.scheduledMessageId, h.toISOString()), (0, u.kb)(), (0, o.closeModal)(E);
        } catch (e) {
            (0, u.xP)(e.message);
        } finally {
            p(!1);
        }
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        size: "md",
        title: _.intl.string(_.t.jbdHj3),
        onClose: a,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: a },
            { variant: "primary", text: _.intl.string(_.t.VZANAD), onClick: T, loading: f },
        ],
        children: (0, i.jsx)(c.A, { defaultValue: A, onChange: I }),
    });
}
