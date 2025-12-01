n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(399606),
    a = n(481060),
    o = n(607070),
    s = n(739566),
    l = n(942951),
    c = n(834129),
    u = n(703656),
    d = n(331372),
    f = n(981631),
    p = n(388032),
    _ = n(418783);
function m(e) {
    let { guildId: t, user: n, username: s } = e,
        l = (0, i.e7)([o.Z], () => !o.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, l),
        u = (0, r.jsx)("img", {
            src: c,
            className: _.userAvatar,
            alt: "",
        });
    return (0, r.jsxs)("div", {
        className: _.thankYouCard,
        role: "img",
        "aria-label": p.intl.formatToPlainString(p.t["utf8+W"], { username: s }),
        children: [
            (0, r.jsx)(d.Z, { avatar: u }),
            (0, r.jsx)(a.Text, {
                className: _.thankYouText,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: p.intl.format(p.t["52BAtC"], {
                    username: s,
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
function h(e) {
    var t, i, a;
    let { channel: o, message: d, compact: _ } = e,
        h = (0, s.ZP)(d),
        g = (0, l.l)({
            user: d.author,
            channelId: o.id,
            guildId: o.guild_id,
            messageId: d.id,
        })(h),
        E = p.intl.format(p.t.TQs67g, {
            username: h.nick,
            usernameHook: g,
            productName:
                null !=
                (a =
                    null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase)
                        ? void 0
                        : t.product_name)
                    ? a
                    : "",
            handleProductListingClick: () => {
                var e, t, n;
                (0, u.uL)(
                    f.Z5c.GUILD_PRODUCT(
                        o.guild_id,
                        null !=
                            (n =
                                null == (t = d.purchaseNotification) || null == (e = t.guild_product_purchase)
                                    ? void 0
                                    : e.listing_id)
                            ? n
                            : "",
                    ),
                );
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, {
                icon: n(570111),
                timestamp: d.timestamp,
                compact: _,
                children: E,
            }),
            (0, r.jsx)(m, {
                username: h.nick,
                guildId: o.guild_id,
                user: d.author,
            }),
        ],
    });
}
