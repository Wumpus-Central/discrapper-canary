e.r(n),
    e.d(n, {
        default: function () {
            return g;
        }
    });
var a = e(200651);
e(192379);
var o = e(512722),
    i = e.n(o),
    r = e(468194),
    l = e(442837),
    s = e(477690),
    c = e(481060),
    d = e(809086),
    u = e(430824),
    m = e(240864),
    f = e(598952),
    h = e(596211),
    x = e(388032),
    _ = e(954374);
let b = (0, r.Mg)(s.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
function j(t) {
    let { guildProductListing: n, guildId: e, onClose: o } = t,
        i = (0, l.e7)([u.Z], () => {
            var t;
            return null === (t = u.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
        });
    return (0, a.jsxs)(c.ModalHeader, {
        className: _.header,
        children: [
            (0, a.jsx)(d.Z, {
                className: _.headerImage,
                listing: n,
                imageSize: b,
                alt: ''
            }),
            (0, a.jsx)(c.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, a.jsxs)('div', {
                className: _.headerTextColumn,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, a.jsx)(c.Spacer, { size: 8 }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: _.__invalid_description,
                        children: i
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: _.__invalid_description,
                        children: x.intl.format(x.t['6dOuaG'], { count: n.attachments_count })
                    })
                ]
            }),
            (0, a.jsx)(c.ModalCloseButton, {
                className: _.closeButton,
                onClick: o
            })
        ]
    });
}
function v(t) {
    let { attachment: n, guildId: e, productId: o } = t;
    return (0, a.jsxs)('li', {
        className: _.attachmentRow,
        children: [
            (0, a.jsx)(f.Z, { attachment: n }),
            (0, a.jsx)(h.Z, {
                className: _.attachmentDownloadButton,
                guildId: e,
                productId: o,
                attachmentId: n.id,
                children: (0, a.jsx)(c.DownloadIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function g(t) {
    var n;
    let { guildId: e, productId: o, onClose: r, transitionState: s } = t,
        d = (0, l.e7)([m.Z], () => m.Z.getGuildProduct(o));
    i()(null != d, 'guildProductListing cannot be null');
    let u = null !== (n = d.attachments) && void 0 !== n ? n : [];
    return (0, a.jsxs)(c.ModalRoot, {
        className: _.modal,
        size: c.ModalSize.MEDIUM,
        transitionState: s,
        'aria-label': x.intl.string(x.t['3jaCaW']),
        children: [
            (0, a.jsx)(j, {
                guildId: e,
                guildProductListing: d,
                onClose: r
            }),
            (0, a.jsx)(c.ModalContent, {
                children: (0, a.jsx)('ul', {
                    className: _.__invalid_attachmentsList,
                    children: u.map((t) =>
                        (0, a.jsx)(
                            v,
                            {
                                guildId: e,
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
