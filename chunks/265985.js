n.d(t, {
    h: function () {
        return x;
    },
    x: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    c = n(131388),
    d = n(409813),
    u = n(430824),
    m = n(73346),
    h = n(817460),
    f = n(584825),
    p = n(570533),
    _ = n(629262),
    g = n(575460),
    E = n(293810),
    C = n(388032),
    I = n(926647);
let x = (e) => {
        let { onClose: t, listing: n, step: r, guildId: a } = e,
            s = (0, f.YB)(a),
            u = (0, c.Z)(E.Xy),
            h = (() => {
                var e;
                if (u) return null;
                let t = (null == s ? void 0 : null === (e = s.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, m._W)(s.cover_image_asset.application_id, s.cover_image_asset, 440) : void 0;
                return null == t && r !== d.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, i.jsx)('div', { className: I.headerImageEmpty })
                      : (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: I.headerImage
                        });
            })();
        return (0, i.jsxs)('div', {
            className: l()(I.headerContainer, { [I.headerEmpty]: u || null == h }),
            children: [
                h,
                (() => {
                    if (r !== d.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, m._W)(n.application_id, n.image_asset, 80);
                    return (0, i.jsx)('div', {
                        className: I.tierImageContainer,
                        children: (0, i.jsx)('img', {
                            src: e,
                            alt: '',
                            className: I.tierImage
                        })
                    });
                })(),
                (0, i.jsx)(o.Clickable, {
                    className: I.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': C.intl.string(C.t.cpT0Cg),
                    children: (0, i.jsx)(o.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: I.closeIcon
                    })
                })
            ]
        });
    },
    N = (e) => {
        let { onClose: t, listing: n, guildId: r } = e,
            l = (0, a.e7)([u.Z], () => u.Z.getGuild(r), [r]),
            c = (0, p.Z)(r).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(h.rC).slice(0, null === c.length ? 4 : 3),
            m = (0, _.Z)(d).slice(0, null === c.length ? 4 : 3);
        return (0, i.jsxs)('div', {
            className: I.confirmationContainer,
            children: [
                (0, i.jsx)(o.Heading, {
                    className: I.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: C.intl.format(C.t['1HIsTk'], { serverName: null == l ? void 0 : l.toString() })
                }),
                (0, i.jsx)(o.Text, {
                    className: I.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: C.intl.format(C.t.oi3gio, { tier: n.name })
                }),
                m.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: I.confirmationSectionLabel,
                                children: C.intl.string(C.t.w0CQ09)
                            }),
                            (0, i.jsx)('div', {
                                className: I.confirmationBenefits,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        g.Z,
                                        {
                                            benefit: e,
                                            guildId: r,
                                            onClick: () => t(!0)
                                        },
                                        (0, h.ab)(e)
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
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: I.confirmationSectionLabel,
                                children: C.intl.string(C.t['6Y1FLi'])
                            }),
                            (0, i.jsxs)('div', {
                                className: I.emojiBenefitsRow,
                                children: [
                                    (0, i.jsx)(s.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null !== (e = t.animated) && void 0 !== e && e,
                                        className: I.emojiImage
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: I.emojiName,
                                                children: C.intl.string(C.t.PrKk4u)
                                            }),
                                            (0, i.jsx)(o.Text, {
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
                (0, i.jsx)(o.Button, {
                    className: I.confirmationButton,
                    onClick: () => t(!0),
                    children: C.intl.string(C.t['Ph+ecH'])
                })
            ]
        });
    };
