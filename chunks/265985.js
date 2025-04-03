n.d(t, {
    h: () => x,
    x: () => j
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    s = n(596454),
    c = n(131388),
    d = n(409813),
    u = n(430824),
    _ = n(73346),
    m = n(817460),
    f = n(584825),
    p = n(570533),
    g = n(629262),
    h = n(575460),
    v = n(293810),
    b = n(388032),
    y = n(506222);
let x = (e) => {
        let { onClose: t, listing: n, step: i, guildId: o } = e,
            s = (0, f.YB)(o),
            u = (0, c.Z)(v.Xy),
            m = (() => {
                var e;
                if (u) return null;
                let t = (null == s || null == (e = s.cover_image_asset) ? void 0 : e.application_id) != null ? (0, _._W)(s.cover_image_asset.application_id, s.cover_image_asset, 440) : void 0;
                return null == t && i !== d.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)('div', { className: y.headerImageEmpty })
                      : (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: y.headerImage
                        });
            })();
        return (0, r.jsxs)('div', {
            className: a()(y.headerContainer, { [y.headerEmpty]: u || null == m }),
            children: [
                m,
                (() => {
                    if (i !== d.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, _._W)(n.application_id, n.image_asset, 80);
                    return (0, r.jsx)('div', {
                        className: y.tierImageContainer,
                        children: (0, r.jsx)('img', {
                            src: e,
                            alt: '',
                            className: y.tierImage
                        })
                    });
                })(),
                (0, r.jsx)(l.P3F, {
                    className: y.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': b.NW.string(b.t.cpT0Cg),
                    children: (0, r.jsx)(l.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: y.closeIcon
                    })
                })
            ]
        });
    },
    j = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            a = (0, o.e7)([u.Z], () => u.Z.getGuild(i), [i]),
            c = (0, p.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(m.rC).slice(0, null === c.length ? 4 : 3),
            _ = (0, g.Z)(d).slice(0, null === c.length ? 4 : 3);
        return (0, r.jsxs)('div', {
            className: y.confirmationContainer,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: y.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: b.NW.format(b.t['1HIsTk'], { serverName: null == a ? void 0 : a.toString() })
                }),
                (0, r.jsx)(l.Text, {
                    className: y.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: b.NW.format(b.t.oi3gio, { tier: n.name })
                }),
                _.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: y.confirmationSectionLabel,
                                children: b.NW.string(b.t.w0CQ09)
                            }),
                            (0, r.jsx)('div', {
                                className: y.confirmationBenefits,
                                children: _.map((e) =>
                                    (0, r.jsx)(
                                        h.Z,
                                        {
                                            benefit: e,
                                            guildId: i,
                                            onClick: () => t(!0)
                                        },
                                        (0, m.ab)(e)
                                    )
                                )
                            })
                        ]
                    }),
                (() => {
                    var e;
                    if (0 === c.length) return null;
                    let t = c[0];
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: y.confirmationSectionLabel,
                                children: b.NW.string(b.t['6Y1FLi'])
                            }),
                            (0, r.jsxs)('div', {
                                className: y.emojiBenefitsRow,
                                children: [
                                    (0, r.jsx)(s.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null != (e = t.animated) && e,
                                        className: y.emojiImage
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: y.emojiName,
                                                children: b.NW.string(b.t.PrKk4u)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: b.NW.format(b.t['2ICUkJ'], { count: c.length })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                })(),
                (0, r.jsx)(l.zxk, {
                    className: y.confirmationButton,
                    onClick: () => t(!0),
                    children: b.NW.string(b.t['Ph+ecH'])
                })
            ]
        });
    };
