t.r(n),
    t.d(n, {
        default: function () {
            return p;
        }
    }),
    t(47120);
var i = t(200651),
    r = t(192379),
    o = t(106351),
    l = t(442837),
    a = t(481060),
    d = t(471445),
    c = t(856768),
    u = t(324067),
    s = t(771845),
    m = t(9156),
    h = t(117984),
    f = t(593214),
    g = t(378337),
    v = t(388032),
    x = t(550358);
function p(e) {
    let { transitionState: n, onClose: t, parentId: o } = e,
        d = (0, l.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()[0]),
        [u, m] = r.useState(d),
        [h, f] = r.useState(!1);
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: n,
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                className: x.modalHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: x.modalHeaderTitle,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'text-lg/semibold',
                                children: v.intl.string(v.t['4wcdEx'])
                            }),
                            (0, i.jsx)(a.ModalCloseButton, { onClick: t })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: x.guildSelector,
                        children: (0, i.jsx)(c.q, {
                            guildId: u,
                            onChange: function (e) {
                                null != e && m(e.id);
                            }
                        })
                    })
                ]
            }),
            (0, i.jsx)(a.ModalContent, {
                className: x.modalContent,
                children: (0, i.jsx)(j, {
                    guildId: u,
                    hideMutedChannels: h,
                    parentId: o
                })
            }),
            (0, i.jsxs)(a.ModalFooter, {
                className: x.modalFooter,
                children: [
                    (0, i.jsx)(a.Button, {
                        className: x.goBackButton,
                        look: a.ButtonLooks.BLANK,
                        color: a.ButtonColors.PRIMARY,
                        size: a.ButtonSizes.SMALL,
                        onClick: t,
                        children: v.intl.string(v.t['/g10LC'])
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(a.Checkbox, {
                            type: a.Checkbox.Types.INVERTED,
                            value: h,
                            onChange: (e, n) => f(n),
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: v.intl.string(v.t.UwOLJC)
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { guildId: n, hideMutedChannels: t, parentId: a } = e,
        d = (0, l.e7)([u.Z], () => u.Z.getCategories(n)),
        c = (0, g.Z)(d),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            var e;
            null == s || null === (e = s.current) || void 0 === e || e.scroll({ top: 0 });
        }, [n]),
        (0, i.jsx)('div', {
            ref: s,
            children: c.map((e) =>
                e.type === o.d.GUILD_CATEGORY
                    ? (0, i.jsx)(B, { name: e.name }, e.id)
                    : (0, i.jsx)(
                          _,
                          {
                              channel: e,
                              hideMutedChannels: t,
                              parentId: a
                          },
                          e.id
                      )
            )
        })
    );
}
function B(e) {
    let { name: n } = e;
    return (0, i.jsx)(a.Text, {
        className: x.categoryRow,
        variant: 'eyebrow',
        color: 'interactive-normal',
        children: n
    });
}
function _(e) {
    let { channel: n, hideMutedChannels: t, parentId: r } = e,
        o = (0, f.s4)(n.id);
    if ((0, l.e7)([m.ZP], () => m.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let c = (0, d.KS)(n);
    return (0, i.jsxs)(
        'div',
        {
            className: x.channelRow,
            children: [
                (0, i.jsxs)('div', {
                    className: x.channelName,
                    children: [
                        null != c &&
                            (0, i.jsx)('div', {
                                className: x.channelIconContainer,
                                children: (0, i.jsx)(c, {
                                    className: x.channelIcon,
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 20,
                                    width: 20
                                })
                            }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-normal',
                            children: n.name
                        })
                    ]
                }),
                null != o
                    ? (0, i.jsx)(C, { channelId: n.id })
                    : (0, i.jsx)(k, {
                          channelId: n.id,
                          parentId: r
                      })
            ]
        },
        n.id
    );
}
function k(e) {
    let { channelId: n, parentId: t } = e;
    return (0, i.jsx)(a.Button, {
        look: a.ButtonLooks.OUTLINED,
        size: a.ButtonSizes.SMALL,
        color: a.ButtonColors.BRAND,
        onClick: function () {
            (0, h.kj)(n, t);
        },
        children: v.intl.string(v.t.OYkgVl)
    });
}
function C(e) {
    let { channelId: n } = e;
    return (0, i.jsx)(a.Button, {
        look: a.ButtonLooks.FILLED,
        size: a.ButtonSizes.SMALL,
        color: a.ButtonColors.PRIMARY,
        onClick: function () {
            (0, h.oC)(n);
        },
        children: v.intl.string(v.t.N86XcH)
    });
}
