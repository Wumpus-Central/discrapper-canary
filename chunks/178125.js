l.d(n, { default: () => j }), l(388685);
var t = l(200651),
    i = l(192379),
    o = l(106351),
    a = l(442837),
    r = l(481060),
    d = l(471445),
    c = l(856768),
    s = l(324067),
    u = l(771845),
    h = l(9156),
    m = l(117984),
    x = l(593214),
    g = l(378337),
    f = l(388032),
    v = l(918492);
function j(e) {
    let { transitionState: n, onClose: l, parentId: o } = e,
        d = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]),
        [s, h] = i.useState(d),
        [m, x] = i.useState(!1);
    return (0, t.jsxs)(r.Y0X, {
        transitionState: n,
        children: [
            (0, t.jsxs)(r.xBx, {
                className: v.modalHeader,
                children: [
                    (0, t.jsxs)('div', {
                        className: v.modalHeaderTitle,
                        children: [
                            (0, t.jsx)(r.X6q, {
                                variant: 'text-lg/semibold',
                                children: f.NW.string(f.t['4wcdEx'])
                            }),
                            (0, t.jsx)(r.olH, { onClick: l })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: v.guildSelector,
                        children: (0, t.jsx)(c.q, {
                            guildId: s,
                            onChange: function (e) {
                                null != e && h(e.id);
                            }
                        })
                    })
                ]
            }),
            (0, t.jsx)(r.hzk, {
                className: v.modalContent,
                children: (0, t.jsx)(p, {
                    guildId: s,
                    hideMutedChannels: m,
                    parentId: o
                })
            }),
            (0, t.jsxs)(r.mzw, {
                className: v.modalFooter,
                children: [
                    (0, t.jsx)(r.zxk, {
                        className: v.goBackButton,
                        look: r.iLD.BLANK,
                        color: r.Ttl.PRIMARY,
                        size: r.PhG.SMALL,
                        onClick: l,
                        children: f.NW.string(f.t['/g10LC'])
                    }),
                    (0, t.jsx)('div', {
                        children: (0, t.jsx)(r.XZJ, {
                            type: r.XZJ.Types.INVERTED,
                            value: m,
                            onChange: (e, n) => x(n),
                            children: (0, t.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: f.NW.string(f.t.UwOLJC)
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { guildId: n, hideMutedChannels: l, parentId: r } = e,
        d = (0, a.e7)([s.Z], () => s.Z.getCategories(n)),
        c = (0, g.Z)(d),
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            var e;
            null == u || null == (e = u.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, t.jsx)('div', {
            ref: u,
            children: c.map((e) =>
                e.type === o.d.GUILD_CATEGORY
                    ? (0, t.jsx)(N, { name: e.name }, e.id)
                    : (0, t.jsx)(
                          C,
                          {
                              channel: e,
                              hideMutedChannels: l,
                              parentId: r
                          },
                          e.id
                      )
            )
        })
    );
}
function N(e) {
    let { name: n } = e;
    return (0, t.jsx)(r.Text, {
        className: v.categoryRow,
        variant: 'eyebrow',
        color: 'interactive-normal',
        children: n
    });
}
function C(e) {
    let { channel: n, hideMutedChannels: l, parentId: i } = e,
        o = (0, x.s4)(n.id);
    if ((0, a.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && l) return null;
    let c = (0, d.KS)(n);
    return (0, t.jsxs)(
        'div',
        {
            className: v.channelRow,
            children: [
                (0, t.jsxs)('div', {
                    className: v.channelName,
                    children: [
                        null != c &&
                            (0, t.jsx)('div', {
                                className: v.channelIconContainer,
                                children: (0, t.jsx)(c, {
                                    className: v.channelIcon,
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 20,
                                    width: 20
                                })
                            }),
                        (0, t.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-normal',
                            children: n.name
                        })
                    ]
                }),
                null != o
                    ? (0, t.jsx)(b, { channelId: n.id })
                    : (0, t.jsx)(I, {
                          channelId: n.id,
                          parentId: i
                      })
            ]
        },
        n.id
    );
}
function I(e) {
    let { channelId: n, parentId: l } = e;
    return (0, t.jsx)(r.zxk, {
        look: r.iLD.OUTLINED,
        size: r.PhG.SMALL,
        color: r.Ttl.BRAND,
        onClick: function () {
            (0, m.kj)(n, l);
        },
        children: f.NW.string(f.t.OYkgVl)
    });
}
function b(e) {
    let { channelId: n } = e;
    return (0, t.jsx)(r.zxk, {
        look: r.iLD.FILLED,
        size: r.PhG.SMALL,
        color: r.Ttl.PRIMARY,
        onClick: function () {
            (0, m.oC)(n);
        },
        children: f.NW.string(f.t.N86XcH)
    });
}
