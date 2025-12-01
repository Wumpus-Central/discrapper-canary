n.d(t, { Z: () => m });
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
    p = n(388032),
    _ = n(829424);
let m = function (e) {
    let { guild: t, message: n, onClose: m } = e,
        h = c.Z.getChannel(u.Z.getChannelId(t.id));
    if (
        ((0, a.ZP)(() => {
            d.default.track(f.rMx.OPEN_POPOUT, {
                type: "New Member Badge Popout",
                guild_id: t.id,
                channel_id: null == h ? void 0 : h.id,
            });
        }),
        null == h)
    )
        return null;
    let g = () => {
        o.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }),
            m(),
            (0, l.q)(n.author, h.id);
    };
    return (0, r.jsx)(s.W_, {
        className: _.messagePopoutContent,
        children: (0, r.jsxs)("div", {
            className: _.popoutContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: _.mainContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.iconContainer,
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
                                    className: _.header,
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
                    className: _.ctaButton,
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
