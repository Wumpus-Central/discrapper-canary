"use strict";
n.d(t, { B: () => A, default: () => h });
var i = n(477900),
    r = n(582128),
    a = n(536637),
    s = n.n(a),
    l = n(189213),
    o = n(192308),
    d = n(151282),
    c = n(859403),
    u = n(566908),
    _ = n(388096),
    E = n(375708);
let A = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function h(e) {
    let { scheduledMessage: t, transitionState: n, onClose: a } = e,
        h = s()(t.sendAtTimestamp.substring(0, 200)),
        [I, f] = r.useState(h),
        [p, T] = r.useState(!1),
        m = (0, u.Vf)(I, t.scheduledMessageId);
    async function g() {
        T(!0);
        try {
            await (0, d.Eg)({ scheduledMessageId: t.scheduledMessageId, scheduledTimestamp: I.toISOString() }),
                (0, c.kb)(),
                (0, o.closeModal)(A);
        } catch (e) {
            (0, c.xP)(e.message);
        } finally {
            T(!1);
        }
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        size: "md",
        title: E.intl.string(E.t.jbdHj3),
        onClose: a,
        actions: [
            { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: a },
            { variant: "primary", text: E.intl.string(E.t.VZANAD), onClick: g, loading: p, disabled: null != m },
        ],
        children: (0, i.jsx)(_.A, { defaultValue: h, onChange: f, scheduledMessageId: t.scheduledMessageId }),
    });
}
