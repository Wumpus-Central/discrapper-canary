n.d(t, {
    h: () => E,
    x: () => I
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(131388),
    d = n(409813),
    u = n(430824),
    m = n(73346),
    _ = n(817460),
    h = n(584825),
    p = n(570533),
    g = n(629262),
    f = n(575460),
    x = n(293810),
    C = n(388032),
    v = n(926647);
let E = (e) => {
        let { onClose: t, listing: n, step: l, guildId: r } = e,
            o = (0, h.YB)(r),
            u = (0, c.Z)(x.Xy),
            _ = (() => {
                var e;
                if (u) return null;
                let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, m._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
                return null == t && l !== d.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, i.jsx)('div', { className: v.headerImageEmpty })
                      : (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: v.headerImage
                        });
            })();
        return (0, i.jsxs)('div', {
            className: a()(v.headerContainer, { [v.headerEmpty]: u || null == _ }),
            children: [
                _,
                (() => {
                    if (l !== d.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, m._W)(n.application_id, n.image_asset, 80);
                    return (0, i.jsx)('div', {
                        className: v.tierImageContainer,
                        children: (0, i.jsx)('img', {
                            src: e,
                            alt: '',
                            className: v.tierImage
                        })
                    });
                })(),
                (0, i.jsx)(s.P3F, {
                    className: v.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': C.intl.string(C.t.cpT0Cg),
                    children: (0, i.jsx)(s.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.closeIcon
                    })
                })
            ]
        });
    },
    I = (e) => {
        let { onClose: t, listing: n, guildId: l } = e,
            a = (0, r.e7)([u.Z], () => u.Z.getGuild(l), [l]),
            c = (0, p.Z)(l).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(_.rC).slice(0, null === c.length ? 4 : 3),
            m = (0, g.Z)(d).slice(0, null === c.length ? 4 : 3);
        return (0, i.jsxs)('div', {
            className: v.confirmationContainer,
            children: [
                (0, i.jsx)(s.X6q, {
                    className: v.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: C.intl.format(C.t['1HIsTk'], { serverName: null == a ? void 0 : a.toString() })
                }),
                (0, i.jsx)(s.Text, {
                    className: v.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: C.intl.format(C.t.oi3gio, { tier: n.name })
                }),
                m.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: v.confirmationSectionLabel,
                                children: C.intl.string(C.t.w0CQ09)
                            }),
                            (0, i.jsx)('div', {
                                className: v.confirmationBenefits,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        f.Z,
                                        {
                                            benefit: e,
                                            guildId: l,
                                            onClick: () => t(!0)
                                        },
                                        (0, _.ab)(e)
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
                                className: v.confirmationSectionLabel,
                                children: C.intl.string(C.t['6Y1FLi'])
                            }),
                            (0, i.jsxs)('div', {
                                className: v.emojiBenefitsRow,
                                children: [
                                    (0, i.jsx)(o.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null !== (e = t.animated) && void 0 !== e && e,
                                        className: v.emojiImage
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: v.emojiName,
                                                children: C.intl.string(C.t.PrKk4u)
                                            }),
                                            (0, i.jsx)(s.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: C.intl.format(C.t['2ICUkJ'], { count: c.length })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                })(),
                (0, i.jsx)(s.zxk, {
                    className: v.confirmationButton,
                    onClick: () => t(!0),
                    children: C.intl.string(C.t['Ph+ecH'])
                })
            ]
        });
    };
