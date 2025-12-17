e.d(n, { default: () => f });
var i = e(54381),
    a = e(473749),
    s = e(120356),
    c = e.n(s),
    o = e(793030),
    l = e(481060),
    r = e(454585),
    d = e(585483),
    u = e(981631),
    p = e(388032),
    h = e(322519),
    x = e(960324);
function f(t) {
    let { channel: n, isFromComposer: e, transitionState: s, onClose: f } = t;
    return (
        a.useEffect(
            () => () => {
                e && d.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE);
            },
            [e],
        ),
        (0, i.jsx)(o.Modal, {
            transitionState: s,
            onClose: f,
            title: p.intl.string(p.t["4d4T4l"]),
            actions: [
                {
                    text: p.intl.string(p.t["NX+WJN"]),
                    onClick: f,
                },
            ],
            children: (0, i.jsx)(l.Text, {
                className: c()(h.content, x.markup),
                variant: "text-sm/normal",
                color: "text-default",
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
