n.d(e, { default: () => v });
var a = n(951288);
n(647438);
var r = n(512722),
    l = n.n(r),
    o = n(468194),
    i = n(442837),
    s = n(477690),
    c = n(481060),
    d = n(809086),
    u = n(430824),
    m = n(240864),
    f = n(598952),
    h = n(596211),
    x = n(388032),
    _ = n(819994);
let j = (0, o.Mg)(s.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
function g(t) {
    let { guildProductListing: e, guildId: n, onClose: r } = t,
        l = (0, i.e7)([u.Z], () => {
            var t;
            return null == (t = u.Z.getGuild(n)) ? void 0 : t.name;
        });
    return (0, a.jsxs)(c.xBx, {
        className: _.header,
        children: [
            (0, a.jsx)(d.Z, {
                className: _.headerImage,
                listing: e,
                imageSize: j,
                alt: "",
            }),
            (0, a.jsx)(c.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, a.jsxs)("div", {
                className: _.headerTextColumn,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: e.name,
                    }),
                    (0, a.jsx)(c.LZC, { size: 8 }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: _.__invalid_description,
                        children: l,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: _.__invalid_description,
                        children: x.intl.format(x.t["6dOuaG"], { count: e.attachments_count }),
                    }),
                ],
            }),
            (0, a.jsx)(c.olH, {
                className: _.closeButton,
                onClick: r,
            }),
        ],
    });
}
function p(t) {
    let { attachment: e, guildId: n, productId: r } = t;
    return (0, a.jsxs)("li", {
        className: _.attachmentRow,
        children: [
            (0, a.jsx)(f.Z, { attachment: e }),
            (0, a.jsx)(h.Z, {
                className: _.attachmentDownloadButton,
                icon: c._8t,
                text: void 0,
                guildId: n,
                productId: r,
                attachmentId: e.id,
            }),
        ],
    });
}
function v(t) {
    var e;
    let { guildId: n, productId: r, onClose: o, transitionState: s } = t,
        d = (0, i.e7)([m.Z], () => m.Z.getGuildProduct(r));
    l()(null != d, "guildProductListing cannot be null");
    let u = null != (e = d.attachments) ? e : [];
    return (0, a.jsxs)(c.Y0X, {
        className: _.modal,
        size: c.CgR.MEDIUM,
        transitionState: s,
        "aria-label": x.intl.string(x.t["3jaCaW"]),
        parentComponent: "GuildProductDownloadModal",
        children: [
            (0, a.jsx)(g, {
                guildId: n,
                guildProductListing: d,
                onClose: o,
            }),
            (0, a.jsx)(c.hzk, {
                children: (0, a.jsx)("ul", {
                    className: _.__invalid_attachmentsList,
                    children: u.map((t) =>
                        (0, a.jsx)(
                            p,
                            {
                                guildId: n,
                                productId: d.id,
                                attachment: t,
                            },
                            t.id,
                        ),
                    ),
                }),
            }),
        ],
    });
}
