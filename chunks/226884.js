n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(964486),
    s = n(58149),
    o = n(652176),
    l = n(448290),
    c = n(734057),
    u = n(309010),
    d = n(954571),
    f = n(652215),
    p = n(985018),
    _ = n(360158);
let h = function (e) {
    let { guild: t, message: n, onClose: h } = e,
        m = c.A.getChannel(u.A.getChannelId(t.id));
    if (
        ((0, a.Ay)(() => {
            d.default.track(f.HAw.OPEN_POPOUT, {
                type: "New Member Badge Popout",
                guild_id: t.id,
                channel_id: null == m ? void 0 : m.id,
            });
        }),
        null == m)
    )
        return null;
    let g = () => {
        s.Ay.trackWithMetadata(f.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }),
            h(),
            (0, l.C)(n.author, m.id);
    };
    return (0, r.jsx)(o.Uq, {
        className: _.cc,
        children: (0, r.jsxs)("div", {
            className: _.jC,
            children: [
                (0, r.jsxs)("div", {
                    className: _.rb,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.zc,
                            children: (0, r.jsx)(i.NVf, {
                                size: "custom",
                                color: "currentColor",
                                width: 40,
                                height: 40,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    className: _.wx,
                                    children: p.intl.string(p.t["v/OYd2"]),
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: p.intl.string(p.t.Z85MlD),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: _.lI,
                    children: (0, r.jsx)(i.Button, {
                        variant: "primary",
                        size: "sm",
                        text: p.intl.format(p.t["+xsVS6"], { username: n.author.username }),
                        fullWidth: !0,
                        onClick: g,
                    }),
                }),
            ],
        }),
    });
};
