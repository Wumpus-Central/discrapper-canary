n.d(t, {
    h: () => _,
    x: () => y
});
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(131388),
    d = n(409813),
    u = n(430824),
    m = n(73346),
    f = n(817460),
    h = n(584825),
    g = n(570533),
    v = n(629262),
    p = n(575460),
    j = n(293810),
    b = n(388032),
    x = n(506222);
let _ = (e) => {
        let { onClose: t, listing: n, step: r, guildId: a } = e,
            o = (0, h.YB)(a),
            u = (0, c.Z)(j.Xy),
            f = (() => {
                var e;
                if (u) return null;
                let t = (null == o || null == (e = o.cover_image_asset) ? void 0 : e.application_id) != null ? (0, m._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
                return null == t && r !== d.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, i.jsx)('div', { className: x.headerImageEmpty })
                      : (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: x.headerImage
                        });
            })();
        return (0, i.jsxs)('div', {
            className: l()(x.headerContainer, { [x.headerEmpty]: u || null == f }),
            children: [
                f,
                (() => {
                    if (r !== d.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, m._W)(n.application_id, n.image_asset, 80);
                    return (0, i.jsx)('div', {
                        className: x.tierImageContainer,
                        children: (0, i.jsx)('img', {
                            src: e,
                            alt: '',
                            className: x.tierImage
                        })
                    });
                })(),
                (0, i.jsx)(s.P3F, {
                    className: x.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': b.intl.string(b.t.cpT0Cg),
                    children: (0, i.jsx)(s.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: x.closeIcon
                    })
                })
            ]
        });
    },
    y = (e) => {
        let { onClose: t, listing: n, guildId: r } = e,
            l = (0, a.e7)([u.Z], () => u.Z.getGuild(r), [r]),
            c = (0, g.Z)(r).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(f.rC).slice(0, null === c.length ? 4 : 3),
            m = (0, v.Z)(d).slice(0, null === c.length ? 4 : 3);
        return (0, i.jsxs)('div', {
            className: x.confirmationContainer,
            children: [
                (0, i.jsx)(s.X6q, {
                    className: x.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: b.intl.format(b.t['1HIsTk'], { serverName: null == l ? void 0 : l.name })
                }),
                (0, i.jsx)(s.Text, {
                    className: x.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: b.intl.format(b.t.oi3gio, { tier: n.name })
                }),
                m.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: x.confirmationSectionLabel,
                                children: b.intl.string(b.t.w0CQ09)
                            }),
                            (0, i.jsx)('div', {
                                className: x.confirmationBenefits,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        p.Z,
                                        {
                                            benefit: e,
                                            guildId: r,
                                            onClick: () => t(!0)
                                        },
                                        (0, f.ab)(e)
                                    )
                                )
                            })
                        ]
                    }),
                (() => {
                    var e;
                    if (0 === c.length) return null;
                    let t = c[0];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: x.confirmationSectionLabel,
                                children: b.intl.string(b.t['6Y1FLi'])
                            }),
                            (0, i.jsxs)('div', {
                                className: x.emojiBenefitsRow,
                                children: [
                                    (0, i.jsx)(o.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null != (e = t.animated) && e,
                                        className: x.emojiImage
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: x.emojiName,
                                                children: b.intl.string(b.t.PrKk4u)
                                            }),
                                            (0, i.jsx)(s.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: b.intl.format(b.t['2ICUkJ'], { count: c.length })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                })(),
                (0, i.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: x.confirmationButton,
                    children: (0, i.jsx)(s.zxk, {
                        variant: 'primary',
                        text: b.intl.string(b.t['Ph+ecH']),
                        onClick: () => t(!0)
                    })
                })
            ]
        });
    };
