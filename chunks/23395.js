n.d(t, { B: () => m, default: () => A });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    s = n.n(a),
    r = n(158954),
    o = n(397927),
    c = n(151282),
    d = n(388096),
    u = n(970244),
    h = n(985018);
let m = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
function A(e) {
    let { scheduledMessage: t, transitionState: n, onClose: a } = e,
        A = s()(t.sendAtTimestamp.substring(0, 200)),
        [p, g] = l.useState(A),
        [f, _] = l.useState(!1),
        E = async () => {
            _(!0);
            try {
                await (0, c.Eg)(t.scheduledMessageId, p.toISOString()), (0, u.kb)(), (0, o.OoC)(m);
            } catch (e) {
                (0, u.xP)(e.message);
            } finally {
                _(!1);
            }
        };
    return (0, i.jsx)(r.Modal, {
        transitionState: n,
        size: "md",
        title: h.intl.string(h.t.jbdHj3),
        onClose: a,
        actions: [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: a },
            { variant: "primary", text: h.intl.string(h.t.VZANAD), onClick: E, loading: f },
        ],
        children: (0, i.jsx)(d.A, { defaultValue: A, onChange: g }),
    });
}
