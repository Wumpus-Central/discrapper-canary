n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(607070),
    o = n(739566),
    s = n(942951),
    c = n(834129),
    d = n(703656),
    u = n(331372),
    m = n(981631),
    h = n(388032),
    f = n(505460);
function p(e) {
    let { guildId: t, user: n, username: o } = e,
        s = (0, r.e7)([a.Z], () => !a.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, s),
        d = (0, i.jsx)('img', {
            src: c,
            className: f.userAvatar,
            alt: ''
        });
    return (0, i.jsxs)('div', {
        className: f.thankYouCard,
        role: 'img',
        'aria-label': h.intl.formatToPlainString(h.t['utf8+f'], { username: o }),
        children: [
            (0, i.jsx)(u.Z, { avatar: d }),
            (0, i.jsx)(l.Text, {
                className: f.thankYouText,
                tag: 'p',
                color: 'status-positive-text',
                variant: 'heading-xl/medium',
                children: h.intl.format(h.t['52BAtL'], {
                    username: o,
                    usernameHook: (e, t) =>
                        (0, i.jsx)(
                            l.Text,
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
function _(e) {
    var t, r, l;
    let { channel: a, message: u, compact: f } = e,
        _ = (0, o.ZP)(u),
        g = (0, s.l)({
            user: u.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: u.id
        })(_),
        E = h.intl.format(h.t.TQs67u, {
            username: _.nick,
            usernameHook: g,
            productName: null !== (l = null === (r = u.purchaseNotification) || void 0 === r ? void 0 : null === (t = r.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== l ? l : '',
            handleProductListingClick: () => {
                var e, t, n;
                (0, d.uL)(m.Z5c.GUILD_PRODUCT(a.guild_id, null !== (n = null === (t = u.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ''));
            }
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: n(570111),
                timestamp: u.timestamp,
                compact: f,
                children: E
            }),
            (0, i.jsx)(p, {
                username: _.nick,
                guildId: a.guild_id,
                user: u.author
            })
        ]
    });
}
