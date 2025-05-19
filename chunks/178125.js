l.d(n, { default: () => C }), l(388685);
var t = l(255367),
    i = l(73800),
    a = l(106351),
    o = l(442837),
    c = l(481060),
    d = l(471445),
    r = l(856768),
    s = l(324067),
    h = l(771845),
    u = l(9156),
    m = l(117984),
    x = l(593214),
    g = l(378337),
    j = l(388032),
    f = l(133661);
function C(e) {
    let { transitionState: n, onClose: l, parentId: a } = e,
        d = (0, o.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]),
        [s, u] = i.useState(d),
        [m, x] = i.useState(!1);
    return (0, t.jsxs)(c.Y0X, {
        transitionState: n,
        children: [
            (0, t.jsxs)(c.xBx, {
                className: f.modalHeader,
                children: [
                    (0, t.jsxs)('div', {
                        className: f.modalHeaderTitle,
                        children: [
                            (0, t.jsx)(c.X6q, {
                                variant: 'text-lg/semibold',
                                children: j.intl.string(j.t['4wcdEx'])
                            }),
                            (0, t.jsx)(c.olH, { onClick: l })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: f.guildSelector,
                        children: (0, t.jsx)(r.q, {
                            guildId: s,
                            onChange: function (e) {
                                null != e && u(e.id);
                            }
                        })
                    })
                ]
            }),
            (0, t.jsx)(c.hzk, {
                className: f.modalContent,
                children: (0, t.jsx)(k, {
                    guildId: s,
                    hideMutedChannels: m,
                    parentId: a
                })
            }),
            (0, t.jsxs)(c.mzw, {
                className: f.modalFooter,
                children: [
                    (0, t.jsx)(c.zxk, {
                        className: f.goBackButton,
                        look: c.iLD.BLANK,
                        color: c.Ttl.PRIMARY,
                        size: c.PhG.SMALL,
                        onClick: l,
                        children: j.intl.string(j.t['/g10LC'])
                    }),
                    (0, t.jsx)('div', {
                        children: (0, t.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            value: m,
                            onChange: (e, n) => x(n),
                            children: (0, t.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: j.intl.string(j.t.UwOLJC)
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { guildId: n, hideMutedChannels: l, parentId: c } = e,
        d = (0, o.e7)([s.Z], () => s.Z.getCategories(n)),
        r = (0, g.Z)(d),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            var e;
            null == h || null == (e = h.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, t.jsx)('div', {
            ref: h,
            children: r.map((e) =>
                e.type === a.d.GUILD_CATEGORY
                    ? (0, t.jsx)(p, { name: e.name }, e.id)
                    : (0, t.jsx)(
                          I,
                          {
                              channel: e,
                              hideMutedChannels: l,
                              parentId: c
                          },
                          e.id
                      )
            )
        })
    );
}
function p(e) {
    let { name: n } = e;
    return (0, t.jsx)(c.Text, {
        className: f.categoryRow,
        variant: 'eyebrow',
        color: 'interactive-normal',
        children: n
    });
}
function I(e) {
    let { channel: n, hideMutedChannels: l, parentId: i } = e,
        a = (0, x.s4)(n.id);
    if ((0, o.e7)([u.ZP], () => u.ZP.isChannelMuted(n.guild_id, n.id)) && l) return null;
    let r = (0, d.KS)(n);
    return (0, t.jsxs)(
        'div',
        {
            className: f.channelRow,
            children: [
                (0, t.jsxs)('div', {
                    className: f.channelName,
                    children: [
                        null != r &&
                            (0, t.jsx)('div', {
                                className: f.channelIconContainer,
                                children: (0, t.jsx)(r, {
                                    className: f.channelIcon,
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 20,
                                    width: 20
                                })
                            }),
                        (0, t.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-normal',
                            children: n.name
                        })
                    ]
                }),
                null != a
                    ? (0, t.jsx)(v, { channelId: n.id })
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
    return (0, t.jsx)(c.zxk, {
        look: c.iLD.OUTLINED,
        size: c.PhG.SMALL,
        color: c.Ttl.BRAND,
        onClick: function () {
            (0, m.kj)(n, l);
        },
        children: j.intl.string(j.t.OYkgVl)
    });
}
function v(e) {
    let { channelId: n } = e;
    return (0, t.jsx)(c.zxk, {
        look: c.iLD.FILLED,
        size: c.PhG.SMALL,
        color: c.Ttl.PRIMARY,
        onClick: function () {
            (0, m.oC)(n);
        },
        children: j.intl.string(j.t.N86XcH)
    });
}
