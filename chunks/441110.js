n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(493773),
    o = n(367907),
    s = n(524444),
    l = n(297047),
    c = n(592125),
    u = n(944486),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(112822);
let h = function (e) {
    let { guild: t, message: n, onClose: h } = e,
        m = c.Z.getChannel(u.Z.getChannelId(t.id));
    if (
        ((0, a.ZP)(() => {
            d.default.track(f.rMx.OPEN_POPOUT, {
                type: "New Member Badge Popout",
                guild_id: t.id,
                channel_id: null == m ? void 0 : m.id,
            });
        }),
        null == m)
    )
        return null;
    let g = () => {
        o.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }),
            h(),
            (0, l.q)(n.author, m.id);
    };
    return (0, r.jsx)(s.W_, {
        className: p.messagePopoutContent,
        children: (0, r.jsxs)("div", {
            className: p.popoutContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: p.mainContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.iconContainer,
                            children: (0, r.jsx)(i.hg2, {
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
                                    className: p.header,
                                    children: _.intl.string(_.t["v/OYd2"]),
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: _.intl.string(_.t.Z85MlD),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p.ctaButton,
                    children: (0, r.jsx)(i.Button, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.format(_.t["+xsVS6"], { username: n.author.username }),
                        fullWidth: !0,
                        onClick: g,
                    }),
                }),
            ],
        }),
    });
};
