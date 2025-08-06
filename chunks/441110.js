n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(493773),
    a = n(367907),
    s = n(524444),
    l = n(297047),
    c = n(592125),
    u = n(944486),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(400822);
let h = function (e) {
    let { guild: t, message: n, onClose: h } = e,
        m = c.Z.getChannel(u.Z.getChannelId(t.id));
    if (
        ((0, o.ZP)(() => {
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
        a.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }),
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
                                (0, r.jsx)(i.X6q, {
                                    variant: "heading-md/semibold",
                                    className: p.header,
                                    children: _.intl.string(_.t["v/OYd3"]),
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: _.intl.string(_.t.Z85MlJ),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p.ctaButton,
                    children: (0, r.jsx)(i.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.format(_.t["+xsVS0"], { username: n.author.username }),
                        fullWidth: !0,
                        onClick: g,
                    }),
                }),
            ],
        }),
    });
};
