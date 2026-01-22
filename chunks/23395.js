n.d(t, {
    B: () => p,
    default: () => h,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(151282),
    u = n(388096),
    d = n(970244),
    f = n(985018);
let p = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function h(e) {
    let { scheduledMessage: t, transitionState: n, onClose: i } = e,
        h = a()(t.sendAtTimestamp.substring(0, 200)),
        [b, g] = l.useState(h),
        [m, A] = l.useState(!1),
        y = async () => {
            A(!0);
            try {
                await (0, c.Eg)(t.scheduledMessageId, b.toISOString()), (0, d.kb)(), (0, o.OoC)(p);
            } catch (e) {
                (0, d.xP)(e.message);
            } finally {
                A(!1);
            }
        };
    return (0, r.jsx)(s.Modal, {
        transitionState: n,
        size: "md",
        title: f.intl.string(f.t.jbdHj3),
        onClose: i,
        actions: [
            {
                variant: "secondary",
                text: f.intl.string(f.t["ETE/oC"]),
                onClick: i,
            },
            {
                variant: "primary",
                text: f.intl.string(f.t.VZANAD),
                onClick: y,
                loading: m,
            },
        ],
        children: (0, r.jsx)(u.A, {
            defaultValue: h,
            onChange: g,
        }),
    });
}
