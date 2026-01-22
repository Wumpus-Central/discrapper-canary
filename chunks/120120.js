n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(417597),
    a = n(397927),
    s = n(775602),
    o = n(763754),
    l = n(447215),
    c = n(888675),
    u = n(976860),
    d = n(141593),
    f = n(652215),
    p = n(985018),
    _ = n(221110);
function h(e) {
    let { guildId: t, user: n, username: o } = e,
        l = (0, i.bG)([s.A], () => !s.A.useReducedMotion),
        c = n.getAvatarURL(t, 56, l),
        u = (0, r.jsx)("img", {
            src: c,
            className: _.dj,
            alt: "",
        });
    return (0, r.jsxs)("div", {
        className: _.uE,
        role: "img",
        "aria-label": p.intl.formatToPlainString(p.t["utf8+W"], { username: o }),
        children: [
            (0, r.jsx)(d.A, { avatar: u }),
            (0, r.jsx)(a.Text, {
                className: _.Bi,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: p.intl.format(p.t["52BAtC"], {
                    username: o,
                    usernameHook: (e, t) =>
                        (0, r.jsx)(
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
function m(e) {
    var t, i, a;
    let { channel: s, message: d, compact: _ } = e,
        m = (0, o.Ay)(d),
        g = (0, l.P)({
            user: d.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: d.id,
        })(m),
        E = p.intl.format(p.t.TQs67g, {
            username: m.nick,
            usernameHook: g,
            productName:
                null !=
                (t =
                    null == (a = d.purchaseNotification) || null == (i = a.guild_product_purchase)
                        ? void 0
                        : i.product_name)
                    ? t
                    : "",
            handleProductListingClick: () => {
                var e, t, n;
                (0, u.pX)(
                    f.BVt.GUILD_PRODUCT(
                        s.guild_id,
                        null !=
                            (e =
                                null == (n = d.purchaseNotification) || null == (t = n.guild_product_purchase)
                                    ? void 0
                                    : t.listing_id)
                            ? e
                            : "",
                    ),
                );
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.A, {
                icon: n(394803),
                timestamp: d.timestamp,
                compact: _,
                children: E,
            }),
            (0, r.jsx)(h, {
                username: m.nick,
                guildId: s.guild_id,
                user: d.author,
            }),
        ],
    });
}
