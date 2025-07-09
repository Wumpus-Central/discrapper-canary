n.d(t, {
    h: () => j,
    x: () => y
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(131388),
    d = n(409813),
    u = n(430824),
    m = n(73346),
    p = n(817460),
    f = n(584825),
    h = n(570533),
    g = n(629262),
    C = n(575460),
    _ = n(293810),
    b = n(388032),
    v = n(506222);
let j = (e) => {
        let { onClose: t, listing: n, step: i, guildId: a } = e,
            o = (0, f.YB)(a),
            u = (0, c.Z)(_.Xy),
            p = (() => {
                var e;
                if (u) return null;
                let t = (null == o || null == (e = o.cover_image_asset) ? void 0 : e.application_id) != null ? (0, m._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
                return null == t && i !== d.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)('div', { className: v.headerImageEmpty })
                      : (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: v.headerImage
                        });
            })();
        return (0, r.jsxs)('div', {
            className: l()(v.headerContainer, { [v.headerEmpty]: u || null == p }),
            children: [
                p,
                (() => {
                    if (i !== d.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, m._W)(n.application_id, n.image_asset, 80);
                    return (0, r.jsx)('div', {
                        className: v.tierImageContainer,
                        children: (0, r.jsx)('img', {
                            src: e,
                            alt: '',
                            className: v.tierImage
                        })
                    });
                })(),
                (0, r.jsx)(s.P3F, {
                    className: v.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': b.intl.string(b.t.cpT0Cg),
                    children: (0, r.jsx)(s.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.closeIcon
                    })
                })
            ]
        });
    },
    y = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            l = (0, a.e7)([u.Z], () => u.Z.getGuild(i), [i]),
            c = (0, h.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(p.rC).slice(0, null === c.length ? 4 : 3),
            m = (0, g.Z)(d).slice(0, null === c.length ? 4 : 3);
        return (0, r.jsxs)('div', {
            className: v.confirmationContainer,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: v.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: b.intl.format(b.t['1HIsTk'], { serverName: null == l ? void 0 : l.name })
                }),
                (0, r.jsx)(s.Text, {
                    className: v.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: b.intl.format(b.t.oi3gio, { tier: n.name })
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: v.confirmationSectionLabel,
                                children: b.intl.string(b.t.w0CQ09)
                            }),
                            (0, r.jsx)('div', {
                                className: v.confirmationBenefits,
                                children: m.map((e) =>
                                    (0, r.jsx)(
                                        C.Z,
                                        {
                                            benefit: e,
                                            guildId: i,
                                            onClick: () => t(!0)
                                        },
                                        (0, p.ab)(e)
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
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: v.confirmationSectionLabel,
                                children: b.intl.string(b.t['6Y1FLi'])
                            }),
                            (0, r.jsxs)('div', {
                                className: v.emojiBenefitsRow,
                                children: [
                                    (0, r.jsx)(o.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null != (e = t.animated) && e,
                                        className: v.emojiImage
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: v.emojiName,
                                                children: b.intl.string(b.t.PrKk4u)
                                            }),
                                            (0, r.jsx)(s.Text, {
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
                (0, r.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: v.confirmationButton,
                    children: (0, r.jsx)(s.zxk, {
                        variant: 'primary',
                        text: b.intl.string(b.t['Ph+ecH']),
                        onClick: () => t(!0)
                    })
                })
            ]
        });
    };
