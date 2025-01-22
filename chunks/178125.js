t.r(n),
    t.d(n, {
        default: function () {
            return C;
        }
    }),
    t(47120);
var l = t(200651),
    o = t(192379),
    i = t(106351),
    r = t(442837),
    a = t(481060),
    d = t(471445),
    c = t(856768),
    u = t(324067),
    s = t(771845),
    h = t(9156),
    f = t(117984),
    v = t(593214),
    m = t(378337),
    g = t(388032),
    x = t(550358);
function C(e) {
    let { transitionState: n, onClose: t, parentId: i } = e,
        d = (0, r.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()[0]),
        [u, h] = o.useState(d),
        [f, v] = o.useState(!1);
    return (0, l.jsxs)(a.ModalRoot, {
        transitionState: n,
        children: [
            (0, l.jsxs)(a.ModalHeader, {
                className: x.modalHeader,
                children: [
                    (0, l.jsxs)('div', {
                        className: x.modalHeaderTitle,
                        children: [
                            (0, l.jsx)(a.Heading, {
                                variant: 'text-lg/semibold',
                                children: g.intl.string(g.t['4wcdEx'])
                            }),
                            (0, l.jsx)(a.ModalCloseButton, { onClick: t })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: x.guildSelector,
                        children: (0, l.jsx)(c.q, {
                            guildId: u,
                            onChange: function (e) {
                                null != e && h(e.id);
                            }
                        })
                    })
                ]
            }),
            (0, l.jsx)(a.ModalContent, {
                className: x.modalContent,
                children: (0, l.jsx)(j, {
                    guildId: u,
                    hideMutedChannels: f,
                    parentId: i
                })
            }),
            (0, l.jsxs)(a.ModalFooter, {
                className: x.modalFooter,
                children: [
                    (0, l.jsx)(a.Button, {
                        className: x.goBackButton,
                        look: a.ButtonLooks.BLANK,
                        color: a.ButtonColors.PRIMARY,
                        size: a.ButtonSizes.SMALL,
                        onClick: t,
                        children: g.intl.string(g.t['/g10LC'])
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(a.Checkbox, {
                            type: a.Checkbox.Types.INVERTED,
                            value: f,
                            onChange: (e, n) => v(n),
                            children: (0, l.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: g.intl.string(g.t.UwOLJC)
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
        d = (0, r.e7)([u.Z], () => u.Z.getCategories(n)),
        c = (0, m.Z)(d),
        s = o.useRef(null);
    return (
        o.useEffect(() => {
            var e;
            null == s || null === (e = s.current) || void 0 === e || e.scroll({ top: 0 });
        }, [n]),
        (0, l.jsx)('div', {
            ref: s,
            children: c.map((e) =>
                e.type === i.d.GUILD_CATEGORY
                    ? (0, l.jsx)(p, { name: e.name }, e.id)
                    : (0, l.jsx)(
                          I,
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
function p(e) {
    let { name: n } = e;
    return (0, l.jsx)(a.Text, {
        className: x.categoryRow,
        variant: 'eyebrow',
        color: 'interactive-normal',
        children: n
    });
}
function I(e) {
    let { channel: n, hideMutedChannels: t, parentId: o } = e,
        i = (0, v.s4)(n.id);
    if ((0, r.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let c = (0, d.KS)(n);
    return (0, l.jsxs)(
        'div',
        {
            className: x.channelRow,
            children: [
                (0, l.jsxs)('div', {
                    className: x.channelName,
                    children: [
                        null != c &&
                            (0, l.jsx)('div', {
                                className: x.channelIconContainer,
                                children: (0, l.jsx)(c, {
                                    className: x.channelIcon,
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 20,
                                    width: 20
                                })
                            }),
                        (0, l.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-normal',
                            children: n.name
                        })
                    ]
                }),
                null != i
                    ? (0, l.jsx)(_, { channelId: n.id })
                    : (0, l.jsx)(Z, {
                          channelId: n.id,
                          parentId: o
                      })
            ]
        },
        n.id
    );
}
function Z(e) {
    let { channelId: n, parentId: t } = e;
    return (0, l.jsx)(a.Button, {
        look: a.ButtonLooks.OUTLINED,
        size: a.ButtonSizes.SMALL,
        color: a.ButtonColors.BRAND,
        onClick: function () {
            (0, f.kj)(n, t);
        },
        children: g.intl.string(g.t.OYkgVl)
    });
}
function _(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(a.Button, {
        look: a.ButtonLooks.FILLED,
        size: a.ButtonSizes.SMALL,
        color: a.ButtonColors.PRIMARY,
        onClick: function () {
            (0, f.oC)(n);
        },
        children: g.intl.string(g.t.N86XcH)
    });
}
