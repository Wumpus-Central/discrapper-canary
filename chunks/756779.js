t.d(r, { default: () => x }), t(953529);
var n = t(255367);
t(73800);
var o = t(512722),
    s = t.n(o),
    i = t(990547),
    a = t(442837),
    l = t(481060),
    c = t(782568),
    u = t(213609),
    d = t(357352),
    p = t(313201),
    b = t(70097),
    m = t(434404),
    f = t(690221),
    g = t(695346),
    O = t(430824),
    h = t(63063),
    y = t(981631),
    _ = t(921944),
    j = t(20281),
    v = t(476047);
let P = [y.oNc.CREATOR_MONETIZABLE, y.oNc.CREATOR_MONETIZABLE_PROVISIONAL];
function x(e) {
    let { transitionState: r, onClose: t, guildId: o, markAsDismissed: x } = e,
        S = (0, p.Dt)(),
        C = (0, a.e7)([O.Z], () => O.Z.getGuild(o));
    s()(null != C, "Guild must be defined"),
        (0, u.Z)({
            type: j.n.MODAL,
            name: i.ImpressionNames.GUILD_SHOP_UPSELL,
            properties: { passed_in_guild_id: o },
        });
    let N = g.QK.useSetting();
    return (0, n.jsxs)(l.Y0X, {
        size: l.CgR.LARGE,
        className: v.__invalid_root,
        transitionState: r,
        "aria-labelledby": S,
        parentComponent: "GuildProductsUpsellModal",
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: v.header,
                children: [
                    (0, n.jsx)(l.olH, {
                        className: v.closeButton,
                        onClick: t,
                    }),
                    (0, n.jsx)(l.X6q, {
                        variant: "heading-xl/medium",
                        color: "header-primary",
                        id: S,
                        children: "Server Shop is now open for business!",
                    }),
                    (0, n.jsx)(l.LZC, { size: 6 }),
                    (0, n.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: v.description,
                        color: "header-secondary",
                        children:
                            "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community\u2014and earn from your expertise.",
                    }),
                    (0, n.jsx)(l.LZC, { size: 8 }),
                    (0, n.jsx)(f.Z, {
                        onClick: () => {
                            x(_.L.SECONDARY);
                            let e = "".concat(
                                h.Z.getCreatorSupportArticleURL(y.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS),
                                "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1",
                            );
                            (0, c.Z)(e, !0);
                        },
                        children: "Learn more",
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: v.divider }),
            (0, n.jsxs)(l.hzk, {
                className: v.content,
                children: [
                    N
                        ? (0, n.jsx)("img", {
                              src: (0, d.b)("server_products/upsell/demo2.png"),
                              alt: "",
                              className: v.demo,
                          })
                        : (0, n.jsx)(b.Z, {
                              autoPlay: !0,
                              loop: !0,
                              className: v.demo,
                              width: 400,
                              poster: (0, d.b)("server_products/upsell/demo2.png"),
                              src: (0, d.b)("server_products/upsell/demo.mp4"),
                          }),
                    (0, n.jsx)("img", {
                        src: (0, d.b)("server_products/upsell/new_sales.png"),
                        alt: "",
                        className: v.earningsImage,
                    }),
                ],
            }),
            (0, n.jsxs)(l.mzw, {
                children: [
                    (0, n.jsx)(l.zxk, {
                        variant: "primary",
                        text: "Check it out",
                        onClick: () => {
                            P.some((e) => C.features.has(e))
                                ? m.Z.open(o, y.pNK.GUILD_PRODUCTS)
                                : m.Z.open(o, y.pNK.ROLE_SUBSCRIPTIONS),
                                x(_.L.PRIMARY),
                                t();
                        },
                    }),
                    (0, n.jsx)(l.LZC, {
                        size: 12,
                        horizontal: !0,
                    }),
                ],
            }),
        ],
    });
}
