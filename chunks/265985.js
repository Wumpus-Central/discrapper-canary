n.d(t, {
    h: () => C,
    x: () => _
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    c = n(131388),
    u = n(409813),
    d = n(430824),
    p = n(73346),
    m = n(817460),
    f = n(584825),
    h = n(570533),
    g = n(629262),
    b = n(575460),
    v = n(293810),
    y = n(388032),
    j = n(506222);
let C = (e) => {
        let { onClose: t, listing: n, step: i, guildId: a } = e,
            s = (0, f.YB)(a),
            d = (0, c.Z)(v.Xy),
            m = (() => {
                var e;
                if (d) return null;
                let t = (null == s || null == (e = s.cover_image_asset) ? void 0 : e.application_id) != null ? (0, p._W)(s.cover_image_asset.application_id, s.cover_image_asset, 440) : void 0;
                return null == t && i !== u.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)('div', { className: j.headerImageEmpty })
                      : (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: j.headerImage
                        });
            })();
        return (0, r.jsxs)('div', {
            className: l()(j.headerContainer, { [j.headerEmpty]: d || null == m }),
            children: [
                m,
                (() => {
                    if (i !== u.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, p._W)(n.application_id, n.image_asset, 80);
                    return (0, r.jsx)('div', {
                        className: j.tierImageContainer,
                        children: (0, r.jsx)('img', {
                            src: e,
                            alt: '',
                            className: j.tierImage
                        })
                    });
                })(),
                (0, r.jsx)(o.P3F, {
                    className: j.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': y.intl.string(y.t.cpT0Cg),
                    children: (0, r.jsx)(o.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: j.closeIcon
                    })
                })
            ]
        });
    },
    _ = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            l = (0, a.e7)([d.Z], () => d.Z.getGuild(i), [i]),
            c = (0, h.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(m.rC).slice(0, null === c.length ? 4 : 3),
            p = (0, g.Z)(u).slice(0, null === c.length ? 4 : 3);
        return (0, r.jsxs)('div', {
            className: j.confirmationContainer,
            children: [
                (0, r.jsx)(o.X6q, {
                    className: j.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: y.intl.format(y.t['1HIsTk'], { serverName: null == l ? void 0 : l.name })
                }),
                (0, r.jsx)(o.Text, {
                    className: j.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: y.intl.format(y.t.oi3gio, { tier: n.name })
                }),
                p.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: j.confirmationSectionLabel,
                                children: y.intl.string(y.t.w0CQ09)
                            }),
                            (0, r.jsx)('div', {
                                className: j.confirmationBenefits,
                                children: p.map((e) =>
                                    (0, r.jsx)(
                                        b.Z,
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
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: j.confirmationSectionLabel,
                                children: y.intl.string(y.t['6Y1FLi'])
                            }),
                            (0, r.jsxs)('div', {
                                className: j.emojiBenefitsRow,
                                children: [
                                    (0, r.jsx)(s.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null != (e = t.animated) && e,
                                        className: j.emojiImage
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: j.emojiName,
                                                children: y.intl.string(y.t.PrKk4u)
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: y.intl.format(y.t['2ICUkJ'], { count: c.length })
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
                    className: j.confirmationButton,
                    children: (0, r.jsx)(o.zxk, {
                        variant: 'primary',
                        text: y.intl.string(y.t['Ph+ecH']),
                        onClick: () => t(!0)
                    })
                })
            ]
        });
    };
