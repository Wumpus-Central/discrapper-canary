n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(397927),
    r = n(775602),
    s = n(763754),
    o = n(447215),
    d = n(888675),
    c = n(976860),
    u = n(141593),
    m = n(652215),
    _ = n(985018),
    h = n(221110);
function p(e) {
    let { guildId: t, user: n, username: s } = e,
        o = (0, l.bG)([r.A], () => !r.A.useReducedMotion),
        d = n.getAvatarURL(t, 56, o),
        c = (0, i.jsx)("img", { src: d, className: h.dj, alt: "" });
    return (0, i.jsxs)("div", {
        className: h.uE,
        role: "img",
        "aria-label": _.intl.formatToPlainString(_.t["utf8+W"], { username: s }),
        children: [
            (0, i.jsx)(u.A, { avatar: c }),
            (0, i.jsx)(a.Text, {
                className: h.Bi,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: _.intl.format(_.t["52BAtC"], {
                    username: s,
                    usernameHook: (e, t) =>
                        (0, i.jsx)(
                            a.Text,
                            {
                                tag: "span",
                                color: "status-positive-text",
                                variant: "heading-xxl/extrabold",
                                lineClamp: 3,
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
function g(e) {
    let { channel: t, message: l, compact: a } = e,
        r = (0, s.Ay)(l),
        u = (0, o.P)({ user: l.author, channelId: t.id, guildId: t.guild_id, messageId: l.id })(r),
        h = _.intl.format(_.t.TQs67g, {
            username: r.nick,
            usernameHook: u,
            productName: l.purchaseNotification?.guild_product_purchase?.product_name ?? "",
            handleProductListingClick: () => {
                (0, c.pX)(
                    m.BVt.GUILD_PRODUCT(t.guild_id, l.purchaseNotification?.guild_product_purchase?.listing_id ?? ""),
                );
            },
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.A, { icon: n(394803), timestamp: l.timestamp, compact: a, children: h }),
            (0, i.jsx)(p, { username: r.nick, guildId: t.guild_id, user: l.author }),
        ],
    });
}
