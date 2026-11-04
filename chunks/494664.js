var n = e(477900),
    s = e(582128),
    a = e(503698),
    l = e.n(a),
    d = e(189213),
    c = e(834730),
    o = e(46054),
    r = e(188567),
    u = e(652215),
    h = e(792996),
    p = e(478832),
    C = e(165648);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { channel: i, isFromComposer: e, transitionState: a, onClose: f } = t;
            return (
                s.useEffect(
                    () => () => {
                        e && r._.dispatch(u.jej.FOCUS_COMPOSER_TITLE);
                    },
                    [e],
                ),
                (0, n.jsx)(d.a, {
                    transitionState: a,
                    onClose: f,
                    title: h.intl.string(h.t["4d4T4l"]),
                    actions: [{ text: h.intl.string(h.t["NX+WJN"]), onClick: f }],
                    children: (0, n.jsx)(c.E, {
                        className: l()(p.Q, C.PT),
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: (0, n.jsx)("div", {
                            children: o.A.parseForumPostGuidelines(i.topic, !0, {
                                channelId: i.id,
                                allowHeading: !0,
                                allowList: !0,
                            }),
                        }),
                    }),
                })
            );
        },
    },
);
