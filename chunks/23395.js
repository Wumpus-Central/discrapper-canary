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
    E = n(792996);
let A = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
n.d(
    t,
    {},
    {
        B: A,
        default: function (e) {
            let { scheduledMessage: t, transitionState: n, onClose: a } = e,
                h = s()(t.sendAtTimestamp.substring(0, 200)),
                [f, I] = r.useState(h),
                [p, m] = r.useState(!1),
                T = (0, u.Vf)(f, t.scheduledMessageId);
            return (0, i.jsx)(l.a, {
                transitionState: n,
                size: "md",
                title: E.intl.string(E.t.jbdHj3),
                onClose: a,
                actions: [
                    { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: a },
                    {
                        variant: "primary",
                        text: E.intl.string(E.t.VZANAD),
                        onClick: async function () {
                            m(!0);
                            try {
                                (await (0, d.Eg)({
                                    scheduledMessageId: t.scheduledMessageId,
                                    scheduledTimestamp: f.toISOString(),
                                }),
                                    (0, c.kb)(),
                                    (0, o.Oo)(A));
                            } catch (e) {
                                (0, c.xP)(e.message);
                            } finally {
                                m(!1);
                            }
                        },
                        loading: p,
                        disabled: null != T,
                    },
                ],
                children: (0, i.jsx)(_.A, { defaultValue: h, onChange: I, scheduledMessageId: t.scheduledMessageId }),
            });
        },
    },
);
