i.d(e, {
    default: () => C,
});
var s = i(627968),
    n = i(64700),
    a = i(503698),
    l = i.n(a),
    d = i(158954),
    o = i(397927),
    r = i(46054),
    c = i(203982),
    p = i(652215),
    u = i(985018),
    h = i(303982),
    x = i(206314);

function C(t) {
    let { channel: e, isFromComposer: i, transitionState: a, onClose: C } = t;
    return (
        n.useEffect(
            () => () => {
                i && c._.dispatch(p.jej.FOCUS_COMPOSER_TITLE);
            },
            [i],
        ),
        (0, s.jsx)(d.Modal, {
            transitionState: a,
            onClose: C,
            title: u.intl.string(u.t["4d4T4l"]),
            actions: [
                {
                    text: u.intl.string(u.t["NX+WJN"]),
                    onClick: C,
                },
            ],
            children: (0, s.jsx)(o.Text, {
                className: l()(h.Q, x.PT),
                variant: "text-sm/normal",
                color: "text-default",
                children: (0, s.jsx)("div", {
                    children: r.A.parseForumPostGuidelines(e.topic, !0, {
                        channelId: e.id,
                        allowHeading: !0,
                        allowList: !0,
                    }),
                }),
            }),
        })
    );
}
