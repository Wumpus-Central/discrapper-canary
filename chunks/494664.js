i.d(e, { default: () => _ });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    o = i(158954),
    c = i(397927),
    d = i(46054),
    r = i(203982),
    p = i(652215),
    u = i(985018),
    h = i(80353),
    x = i(992595);
function _(t) {
    let { channel: e, isFromComposer: i, transitionState: a, onClose: _ } = t;
    return (
        s.useEffect(
            () => () => {
                i && r._.dispatch(p.jej.FOCUS_COMPOSER_TITLE);
            },
            [i],
        ),
        (0, n.jsx)(o.Modal, {
            transitionState: a,
            onClose: _,
            title: u.intl.string(u.t["4d4T4l"]),
            actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: _ }],
            children: (0, n.jsx)(c.Text, {
                className: l()(h.Q, x.PT),
                variant: "text-sm/normal",
                color: "text-default",
                children: (0, n.jsx)("div", {
                    children: d.A.parseForumPostGuidelines(e.topic, !0, {
                        channelId: e.id,
                        allowHeading: !0,
                        allowList: !0,
                    }),
                }),
            }),
        })
    );
}
