n.d(e, { default: () => O });
var r = n(200651);
n(192379);
var a = n(512722),
    o = n.n(a),
    l = n(468194),
    i = n(442837),
    c = n(477690),
    s = n(481060),
    u = n(809086),
    d = n(430824),
    f = n(240864),
    m = n(598952),
    h = n(596211),
    j = n(388032),
    b = n(313881);
let p = (0, l.Mg)(c.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
function x(t) {
    let { guildProductListing: e, guildId: n, onClose: a } = t,
        o = (0, i.e7)([d.Z], () => {
            var t;
            return null == (t = d.Z.getGuild(n)) ? void 0 : t.name;
        });
    return (0, r.jsxs)(s.xBx, {
        className: b.header,
        children: [
            (0, r.jsx)(u.Z, {
                className: b.headerImage,
                listing: e,
                imageSize: p,
                alt: ''
            }),
            (0, r.jsx)(s.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, r.jsxs)('div', {
                className: b.headerTextColumn,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e.name
                    }),
                    (0, r.jsx)(s.LZC, { size: 8 }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: b.__invalid_description,
                        children: o
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: b.__invalid_description,
                        children: j.NW.format(j.t['6dOuaG'], { count: e.attachments_count })
                    })
                ]
            }),
            (0, r.jsx)(s.olH, {
                className: b.closeButton,
                onClick: a
            })
        ]
    });
}
function g(t) {
    let { attachment: e, guildId: n, productId: a } = t;
    return (0, r.jsxs)('li', {
        className: b.attachmentRow,
        children: [
            (0, r.jsx)(m.Z, { attachment: e }),
            (0, r.jsx)(h.Z, {
                className: b.attachmentDownloadButton,
                guildId: n,
                productId: a,
                attachmentId: e.id,
                children: (0, r.jsx)(s._8t, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function O(t) {
    var e;
    let { guildId: n, productId: a, onClose: l, transitionState: c } = t,
        u = (0, i.e7)([f.Z], () => f.Z.getGuildProduct(a));
    o()(null != u, 'guildProductListing cannot be null');
    let d = null != (e = u.attachments) ? e : [];
    return (0, r.jsxs)(s.Y0X, {
        className: b.modal,
        size: s.CgR.MEDIUM,
        transitionState: c,
        'aria-label': j.NW.string(j.t['3jaCaW']),
        children: [
            (0, r.jsx)(x, {
                guildId: n,
                guildProductListing: u,
                onClose: l
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsx)('ul', {
                    className: b.__invalid_attachmentsList,
                    children: d.map((t) =>
                        (0, r.jsx)(
                            g,
                            {
                                guildId: n,
                                productId: u.id,
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
