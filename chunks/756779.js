r.d(s, { default: () => L }), r(266796);
var i = r(200651);
r(192379);
var o = r(512722),
    n = r.n(o),
    a = r(990547),
    t = r(442837),
    d = r(481060),
    l = r(782568),
    c = r(213609),
    p = r(357352),
    m = r(313201),
    u = r(70097),
    _ = r(434404),
    h = r(690221),
    b = r(695346),
    g = r(430824),
    x = r(63063),
    N = r(981631),
    S = r(921944),
    R = r(20281),
    C = r(476047);
let v = [N.oNc.CREATOR_MONETIZABLE, N.oNc.CREATOR_MONETIZABLE_PROVISIONAL];
function L(e) {
    let { transitionState: s, onClose: r, guildId: o, markAsDismissed: L } = e,
        j = (0, m.Dt)(),
        I = (0, t.e7)([g.Z], () => g.Z.getGuild(o));
    n()(null != I, 'Guild must be defined'),
        (0, c.Z)({
            type: R.n.MODAL,
            name: a.ImpressionNames.GUILD_SHOP_UPSELL,
            properties: { passed_in_guild_id: o }
        });
    let O = b.QK.useSetting();
    return (0, i.jsxs)(d.Y0X, {
        size: d.CgR.LARGE,
        className: C.__invalid_root,
        transitionState: s,
        'aria-labelledby': j,
        children: [
            (0, i.jsxs)(d.xBx, {
                separator: !1,
                className: C.header,
                children: [
                    (0, i.jsx)(d.olH, {
                        className: C.closeButton,
                        onClick: r
                    }),
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/medium',
                        color: 'header-primary',
                        id: j,
                        children: 'Server Shop is now open for business!'
                    }),
                    (0, i.jsx)(d.LZC, { size: 6 }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        className: C.description,
                        color: 'header-secondary',
                        children: 'Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community\u2014and earn from your expertise.'
                    }),
                    (0, i.jsx)(d.LZC, { size: 8 }),
                    (0, i.jsx)(h.Z, {
                        onClick: () => {
                            L(S.L.SECONDARY);
                            let e = ''.concat(x.Z.getCreatorSupportArticleURL(N.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS), '#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1');
                            (0, l.Z)(e, !0);
                        },
                        children: 'Learn more'
                    })
                ]
            }),
            (0, i.jsx)('div', { className: C.divider }),
            (0, i.jsxs)(d.hzk, {
                className: C.content,
                children: [
                    O
                        ? (0, i.jsx)('img', {
                              src: (0, p.b)('server_products/upsell/demo2.png'),
                              alt: '',
                              className: C.demo
                          })
                        : (0, i.jsx)(u.Z, {
                              autoPlay: !0,
                              loop: !0,
                              className: C.demo,
                              width: 400,
                              poster: (0, p.b)('server_products/upsell/demo2.png'),
                              src: (0, p.b)('server_products/upsell/demo.mp4')
                          }),
                    (0, i.jsx)('img', {
                        src: (0, p.b)('server_products/upsell/new_sales.png'),
                        alt: '',
                        className: C.earningsImage
                    })
                ]
            }),
            (0, i.jsxs)(d.mzw, {
                children: [
                    (0, i.jsx)(d.zxk, {
                        onClick: () => {
                            v.some((e) => I.hasFeature(e)) ? _.Z.open(o, N.pNK.GUILD_PRODUCTS) : _.Z.open(o, N.pNK.ROLE_SUBSCRIPTIONS), L(S.L.PRIMARY), r();
                        },
                        children: 'Check it out'
                    }),
                    (0, i.jsx)(d.LZC, {
                        size: 12,
                        horizontal: !0
                    })
                ]
            })
        ]
    });
}
