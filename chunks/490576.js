n.d(t, { default: () => v });
var a = n(255367);
n(73800);
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
    _ = n(313881);
let j = (0, o.Mg)(s.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
function g(e) {
    let { guildProductListing: t, guildId: n, onClose: r } = e,
        l = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getGuild(n)) ? void 0 : e.name;
        });
    return (0, a.jsxs)(c.xBx, {
        className: _.header,
        children: [
            (0, a.jsx)(d.Z, {
                className: _.headerImage,
                listing: t,
                imageSize: j,
                alt: ''
            }),
            (0, a.jsx)(c.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, a.jsxs)('div', {
                className: _.headerTextColumn,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t.name
                    }),
                    (0, a.jsx)(c.LZC, { size: 8 }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: _.__invalid_description,
                        children: l
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: _.__invalid_description,
                        children: x.intl.format(x.t['6dOuaG'], { count: t.attachments_count })
                    })
                ]
            }),
            (0, a.jsx)(c.olH, {
                className: _.closeButton,
                onClick: r
            })
        ]
    });
}
function p(e) {
    let { attachment: t, guildId: n, productId: r } = e;
    return (0, a.jsxs)('li', {
        className: _.attachmentRow,
        children: [
            (0, a.jsx)(f.Z, { attachment: t }),
            (0, a.jsx)(h.Z, {
                className: _.attachmentDownloadButton,
                guildId: n,
                productId: r,
                attachmentId: t.id,
                children: (0, a.jsx)(c._8t, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function v(e) {
    var t;
    let { guildId: n, productId: r, onClose: o, transitionState: s } = e,
        d = (0, i.e7)([m.Z], () => m.Z.getGuildProduct(r));
    l()(null != d, 'guildProductListing cannot be null');
    let u = null != (t = d.attachments) ? t : [];
    return (0, a.jsxs)(c.Y0X, {
        className: _.modal,
        size: c.CgR.MEDIUM,
        transitionState: s,
        'aria-label': x.intl.string(x.t['3jaCaW']),
        parentComponent: 'GuildProductDownloadModal',
        children: [
            (0, a.jsx)(g, {
                guildId: n,
                guildProductListing: d,
                onClose: o
            }),
            (0, a.jsx)(c.hzk, {
                children: (0, a.jsx)('ul', {
                    className: _.__invalid_attachmentsList,
                    children: u.map((e) =>
                        (0, a.jsx)(
                            p,
                            {
                                guildId: n,
                                productId: d.id,
                                attachment: e
                            },
                            e.id
                        )
                    )
                })
            })
        ]
    });
}
