n.d(t, { B: () => E, default: () => m });
var a = n(627968),
    i = n(64700),
    s = n(989349),
    l = n.n(s),
    r = n(189213),
    o = n(192308),
    d = n(151282),
    u = n(388096),
    c = n(970244),
    S = n(375708);
let E = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function m(e) {
    let { scheduledMessage: t, transitionState: n, onClose: s } = e,
        m = l()(t.sendAtTimestamp.substring(0, 200)),
        [h, p] = i.useState(m),
        [g, f] = i.useState(!1);
    async function v() {
        f(!0);
        try {
            await (0, d.Eg)(t.scheduledMessageId, h.toISOString()), (0, c.kb)(), (0, o.closeModal)(E);
        } catch (e) {
            (0, c.xP)(e.message);
        } finally {
            f(!1);
        }
    }
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        size: "md",
        title: S.intl.string(S.t.jbdHj3),
        onClose: s,
        actions: [
            { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: s },
            { variant: "primary", text: S.intl.string(S.t.VZANAD), onClick: v, loading: g },
        ],
        children: (0, a.jsx)(u.A, { defaultValue: m, onChange: p }),
    });
}
