l.d(n, { default: () => j }), l(47120);
var t = l(200651),
    i = l(192379),
    a = l(106351),
    d = l(442837),
    o = l(481060),
    r = l(471445),
    c = l(856768),
    s = l(324067),
    u = l(771845),
    h = l(9156),
    f = l(117984),
    v = l(593214),
    m = l(378337),
    x = l(388032),
    g = l(918492);
function j(e) {
    let { transitionState: n, onClose: l, parentId: a } = e,
        r = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]),
        [s, h] = i.useState(r),
        [f, v] = i.useState(!1);
    return (0, t.jsxs)(o.Y0X, {
        transitionState: n,
        children: [
            (0, t.jsxs)(o.xBx, {
                className: g.modalHeader,
                children: [
                    (0, t.jsxs)('div', {
                        className: g.modalHeaderTitle,
                        children: [
                            (0, t.jsx)(o.X6q, {
                                variant: 'text-lg/semibold',
                                children: x.NW.string(x.t['4wcdEx'])
                            }),
                            (0, t.jsx)(o.olH, { onClick: l })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: g.guildSelector,
                        children: (0, t.jsx)(c.q, {
                            guildId: s,
                            onChange: function (e) {
                                null != e && h(e.id);
                            }
                        })
                    })
                ]
            }),
            (0, t.jsx)(o.hzk, {
                className: g.modalContent,
                children: (0, t.jsx)(p, {
                    guildId: s,
                    hideMutedChannels: f,
                    parentId: a
                })
            }),
            (0, t.jsxs)(o.mzw, {
                className: g.modalFooter,
                children: [
                    (0, t.jsx)(o.zxk, {
                        className: g.goBackButton,
                        look: o.iLD.BLANK,
                        color: o.Ttl.PRIMARY,
                        size: o.PhG.SMALL,
                        onClick: l,
                        children: x.NW.string(x.t['/g10LC'])
                    }),
                    (0, t.jsx)('div', {
                        children: (0, t.jsx)(o.XZJ, {
                            type: o.XZJ.Types.INVERTED,
                            value: f,
                            onChange: (e, n) => v(n),
                            children: (0, t.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: x.NW.string(x.t.UwOLJC)
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { guildId: n, hideMutedChannels: l, parentId: o } = e,
        r = (0, d.e7)([s.Z], () => s.Z.getCategories(n)),
        c = (0, m.Z)(r),
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            var e;
            null == u || null == (e = u.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, t.jsx)('div', {
            ref: u,
            children: c.map((e) =>
                e.type === a.d.GUILD_CATEGORY
                    ? (0, t.jsx)(C, { name: e.name }, e.id)
                    : (0, t.jsx)(
                          I,
                          {
                              channel: e,
                              hideMutedChannels: l,
                              parentId: o
                          },
                          e.id
                      )
            )
        })
    );
}
function C(e) {
    let { name: n } = e;
    return (0, t.jsx)(o.Text, {
        className: g.categoryRow,
        variant: 'eyebrow',
        color: 'interactive-normal',
        children: n
    });
}
function I(e) {
    let { channel: n, hideMutedChannels: l, parentId: i } = e,
        a = (0, v.s4)(n.id);
    if ((0, d.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && l) return null;
    let c = (0, r.KS)(n);
    return (0, t.jsxs)(
        'div',
        {
            className: g.channelRow,
            children: [
                (0, t.jsxs)('div', {
                    className: g.channelName,
                    children: [
                        null != c &&
                            (0, t.jsx)('div', {
                                className: g.channelIconContainer,
                                children: (0, t.jsx)(c, {
                                    className: g.channelIcon,
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 20,
                                    width: 20
                                })
                            }),
                        (0, t.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-normal',
                            children: n.name
                        })
                    ]
                }),
                null != a
                    ? (0, t.jsx)(Z, { channelId: n.id })
                    : (0, t.jsx)(N, {
                          channelId: n.id,
                          parentId: i
                      })
            ]
        },
        n.id
    );
}
function N(e) {
    let { channelId: n, parentId: l } = e;
    return (0, t.jsx)(o.zxk, {
        look: o.iLD.OUTLINED,
        size: o.PhG.SMALL,
        color: o.Ttl.BRAND,
        onClick: function () {
            (0, f.kj)(n, l);
        },
        children: x.NW.string(x.t.OYkgVl)
    });
}
function Z(e) {
    let { channelId: n } = e;
    return (0, t.jsx)(o.zxk, {
        look: o.iLD.FILLED,
        size: o.PhG.SMALL,
        color: o.Ttl.PRIMARY,
        onClick: function () {
            (0, f.oC)(n);
        },
        children: x.NW.string(x.t.N86XcH)
    });
}
