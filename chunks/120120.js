"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(417597),
    l = n(834730),
    s = n(775602),
    a = n(763754),
    o = n(447215),
    c = n(888675),
    u = n(976860),
    d = n(141593),
    _ = n(652215),
    E = n(985018),
    A = n(310145);
function m(e) {
    let { guildId: t, user: n, username: a } = e,
        o = (0, r.bG)([s.A], () => !s.A.useReducedMotion),
        c = n.getAvatarURL(t, 56, o),
        u = (0, i.jsx)("img", { src: c, className: A.dj, alt: "" });
    return (0, i.jsxs)("div", {
        className: A.uE,
        role: "img",
        "aria-label": E.intl.formatToPlainString(E.t["utf8+W"], { username: a }),
        children: [
            (0, i.jsx)(d.A, { avatar: u }),
            (0, i.jsx)(l.E, {
                className: A.Bi,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: E.intl.format(E.t["52BAtC"], {
                    username: a,
                    usernameHook: (e, t) =>
                        (0, i.jsx)(
                            l.E,
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
function I(e) {
    let { channel: t, message: r, compact: l } = e,
        s = (0, a.Ay)(r),
        d = (0, o.P)({ user: r.author, channelId: t.id, guildId: t.guild_id, messageId: r.id })(s),
        A = E.intl.format(E.t.TQs67g, {
            username: s.nick,
            usernameHook: d,
            productName: r.purchaseNotification?.guild_product_purchase?.product_name ?? "",
            handleProductListingClick: () => {
                (0, u.pX)(
                    _.BVt.GUILD_PRODUCT(t.guild_id, r.purchaseNotification?.guild_product_purchase?.listing_id ?? ""),
                );
            },
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, { icon: n(617184), timestamp: r.timestamp, compact: l, children: A }),
            (0, i.jsx)(m, { username: s.nick, guildId: t.guild_id, user: r.author }),
        ],
    });
}
