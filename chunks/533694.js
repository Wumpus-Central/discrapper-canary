n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(399606),
    a = n(481060),
    l = n(607070),
    o = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(703656),
    d = n(331372),
    p = n(981631),
    m = n(388032),
    f = n(48215);
function h(e) {
    let { guildId: t, user: n, username: o } = e,
        s = (0, i.e7)([l.Z], () => !l.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, s),
        u = (0, r.jsx)('img', {
            src: c,
            className: f.userAvatar,
            alt: ''
        });
    return (0, r.jsxs)('div', {
        className: f.thankYouCard,
        role: 'img',
        'aria-label': m.NW.formatToPlainString(m.t['utf8+f'], { username: o }),
        children: [
            (0, r.jsx)(d.Z, { avatar: u }),
            (0, r.jsx)(a.Text, {
                className: f.thankYouText,
                tag: 'p',
                color: 'status-positive-text',
                variant: 'heading-xl/medium',
                children: m.NW.format(m.t['52BAtL'], {
                    username: o,
                    usernameHook: (e, t) =>
                        (0, r.jsx)(
                            a.Text,
                            {
                                tag: 'span',
                                color: 'status-positive-text',
                                variant: 'heading-xxl/extrabold',
                                lineClamp: 3,
                                children: e
                            },
                            t
                        )
                })
            })
        ]
    });
}
function g(e) {
    var t, i, a;
    let { channel: l, message: d, compact: f } = e,
        g = (0, o.ZP)(d),
        _ = (0, s.l)({
            user: d.author,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: d.id
        })(g),
        b = m.NW.format(m.t.TQs67u, {
            username: g.nick,
            usernameHook: _,
            productName: null != (a = null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase) ? void 0 : t.product_name) ? a : '',
            handleProductListingClick: () => {
                var e, t, n;
                (0, u.uL)(p.Z5c.GUILD_PRODUCT(l.guild_id, null != (n = null == (t = d.purchaseNotification) || null == (e = t.guild_product_purchase) ? void 0 : e.listing_id) ? n : ''));
            }
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, {
                icon: n(570111),
                timestamp: d.timestamp,
                compact: f,
                children: b
            }),
            (0, r.jsx)(h, {
                username: g.nick,
                guildId: l.guild_id,
                user: d.author
            })
        ]
    });
}
