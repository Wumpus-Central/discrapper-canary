n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(481060),
    r = n(607070),
    s = n(739566),
    o = n(942951),
    c = n(834129),
    d = n(703656),
    u = n(331372),
    m = n(981631),
    _ = n(388032),
    h = n(666430);
function p(e) {
    let { guildId: t, user: n, username: s } = e,
        o = (0, l.e7)([r.Z], () => !r.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, o),
        d = (0, i.jsx)('img', {
            src: c,
            className: h.userAvatar,
            alt: ''
        });
    return (0, i.jsxs)('div', {
        className: h.thankYouCard,
        role: 'img',
        'aria-label': _.intl.formatToPlainString(_.t['utf8+f'], { username: s }),
        children: [
            (0, i.jsx)(u.Z, { avatar: d }),
            (0, i.jsx)(a.Text, {
                className: h.thankYouText,
                tag: 'p',
                color: 'status-positive-text',
                variant: 'heading-xl/medium',
                children: _.intl.format(_.t['52BAtL'], {
                    username: s,
                    usernameHook: (e, t) =>
                        (0, i.jsx)(
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
    var t, l, a;
    let { channel: r, message: u, compact: h } = e,
        g = (0, s.ZP)(u),
        f = (0, o.l)({
            user: u.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: u.id
        })(g),
        x = _.intl.format(_.t.TQs67u, {
            username: g.nick,
            usernameHook: f,
            productName: null !== (a = null === (l = u.purchaseNotification) || void 0 === l ? void 0 : null === (t = l.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== a ? a : '',
            handleProductListingClick: () => {
                var e, t, n;
                (0, d.uL)(m.Z5c.GUILD_PRODUCT(r.guild_id, null !== (n = null === (t = u.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ''));
            }
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: n(570111),
                timestamp: u.timestamp,
                compact: h,
                children: x
            }),
            (0, i.jsx)(p, {
                username: g.nick,
                guildId: r.guild_id,
                user: u.author
            })
        ]
    });
}
