n.d(e, { default: () => Z });
var a = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(468194),
    s = n(442837),
    r = n(477690),
    c = n(481060),
    d = n(809086),
    u = n(430824),
    m = n(240864),
    x = n(598952),
    h = n(596211),
    f = n(388032),
    _ = n(954374);
let j = (0, o.Mg)(r.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
function v(t) {
    let { guildProductListing: e, guildId: n, onClose: i } = t,
        l = (0, s.e7)([u.Z], () => {
            var t;
            return null === (t = u.Z.getGuild(n)) || void 0 === t ? void 0 : t.name;
        });
    return (0, a.jsxs)(c.xBx, {
        className: _.header,
        children: [
            (0, a.jsx)(d.Z, {
                className: _.headerImage,
                listing: e,
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
                        children: e.name
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
                        children: f.intl.format(f.t['6dOuaG'], { count: e.attachments_count })
                    })
                ]
            }),
            (0, a.jsx)(c.olH, {
                className: _.closeButton,
                onClick: i
            })
        ]
    });
}
function g(t) {
    let { attachment: e, guildId: n, productId: i } = t;
    return (0, a.jsxs)('li', {
        className: _.attachmentRow,
        children: [
            (0, a.jsx)(x.Z, { attachment: e }),
            (0, a.jsx)(h.Z, {
                className: _.attachmentDownloadButton,
                guildId: n,
                productId: i,
                attachmentId: e.id,
                children: (0, a.jsx)(c._8t, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function Z(t) {
    var e;
    let { guildId: n, productId: i, onClose: o, transitionState: r } = t,
        d = (0, s.e7)([m.Z], () => m.Z.getGuildProduct(i));
    l()(null != d, 'guildProductListing cannot be null');
    let u = null !== (e = d.attachments) && void 0 !== e ? e : [];
    return (0, a.jsxs)(c.Y0X, {
        className: _.modal,
        size: c.CgR.MEDIUM,
        transitionState: r,
        'aria-label': f.intl.string(f.t['3jaCaW']),
        children: [
            (0, a.jsx)(v, {
                guildId: n,
                guildProductListing: d,
                onClose: o
            }),
            (0, a.jsx)(c.hzk, {
                children: (0, a.jsx)('ul', {
                    className: _.__invalid_attachmentsList,
                    children: u.map((t) =>
                        (0, a.jsx)(
                            g,
                            {
                                guildId: n,
                                productId: d.id,
                                attachment: t
                            },
                            t.id
                        )
                    )
                })
            })
        ]
    });
}
