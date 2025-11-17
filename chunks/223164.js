e.d(n, { default: () => x });
var i = e(54381),
    s = e(473749),
    a = e(120356),
    o = e.n(a),
    c = e(793030),
    l = e(481060),
    r = e(454585),
    d = e(585483),
    u = e(981631),
    p = e(388032),
    h = e(314311),
    k = e(430864);
function x(t) {
    let { channel: n, isFromComposer: e, transitionState: a, onClose: x } = t;
    return (
        s.useEffect(
            () => () => {
                e && d.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE);
            },
            [e],
        ),
        (0, i.jsx)(c.Modal, {
            transitionState: a,
            onClose: x,
            title: p.intl.string(p.t["4d4T4l"]),
            actions: [
                {
                    text: p.intl.string(p.t["NX+WJN"]),
                    onClick: x,
                },
            ],
            children: (0, i.jsx)(l.Text, {
                className: o()(h.content, k.markup),
                variant: "text-sm/normal",
                color: "header-secondary",
                children: (0, i.jsx)("div", {
                    children: r.Z.parseForumPostGuidelines(n.topic, !0, {
                        channelId: n.id,
                        allowHeading: !0,
                        allowList: !0,
                    }),
                }),
            }),
        })
    );
}
