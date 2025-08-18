n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(481060),
    o = n(607070),
    a = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(703656),
    d = n(331372),
    p = n(981631),
    m = n(388032),
    f = n(418783);
function g(e) {
    let { guildId: t, user: n, username: a } = e,
        s = (0, i.e7)([o.Z], () => !o.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, s),
        u = (0, r.jsx)("img", {
            src: c,
            className: f.userAvatar,
            alt: "",
        });
    return (0, r.jsxs)("div", {
        className: f.thankYouCard,
        role: "img",
        "aria-label": m.intl.formatToPlainString(m.t["utf8+f"], { username: a }),
        children: [
            (0, r.jsx)(d.Z, { avatar: u }),
            (0, r.jsx)(l.Text, {
                className: f.thankYouText,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: m.intl.format(m.t["52BAtL"], {
                    username: a,
                    usernameHook: (e, t) =>
                        (0, r.jsx)(
                            l.Text,
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
function _(e) {
    var t, i, l;
    let { channel: o, message: d, compact: f } = e,
        _ = (0, a.ZP)(d),
        h = (0, s.l)({
            user: d.author,
            channelId: o.id,
            guildId: o.guild_id,
            messageId: d.id,
        })(_),
        b = m.intl.format(m.t.TQs67u, {
            username: _.nick,
            usernameHook: h,
            productName:
                null !=
                (l =
                    null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase)
                        ? void 0
                        : t.product_name)
                    ? l
                    : "",
            handleProductListingClick: () => {
                var e, t, n;
                (0, u.uL)(
                    p.Z5c.GUILD_PRODUCT(
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
                compact: f,
                children: b,
            }),
            (0, r.jsx)(g, {
                username: _.nick,
                guildId: o.guild_id,
                user: d.author,
            }),
        ],
    });
}
