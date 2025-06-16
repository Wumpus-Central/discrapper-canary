l.d(n, { default: () => f }), l(388685);
var t = l(255367),
    a = l(73800),
    i = l(106351),
    o = l(442837),
    d = l(481060),
    c = l(471445),
    r = l(856768),
    s = l(324067),
    h = l(771845),
    u = l(9156),
    m = l(117984),
    x = l(593214),
    g = l(378337),
    j = l(388032),
    C = l(918492);
function f(e) {
    let { transitionState: n, onClose: l, parentId: i } = e,
        c = (0, o.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]),
        [s, u] = a.useState(c),
        [m, x] = a.useState(!1);
    return (0, t.jsxs)(d.Y0X, {
        transitionState: n,
        parentComponent: 'AddFavoriteChannelModal',
        children: [
            (0, t.jsxs)(d.xBx, {
                className: C.modalHeader,
                children: [
                    (0, t.jsxs)('div', {
                        className: C.modalHeaderTitle,
                        children: [
                            (0, t.jsx)(d.X6q, {
                                variant: 'text-lg/semibold',
                                children: j.intl.string(j.t['4wcdEx'])
                            }),
                            (0, t.jsx)(d.olH, { onClick: l })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: C.guildSelector,
                        children: (0, t.jsx)(r.q, {
                            guildId: s,
                            onChange: function (e) {
                                null != e && u(e.id);
                            }
                        })
                    })
                ]
            }),
            (0, t.jsx)(d.hzk, {
                className: C.modalContent,
                children: (0, t.jsx)(p, {
                    guildId: s,
                    hideMutedChannels: m,
                    parentId: i
                })
            }),
            (0, t.jsxs)(d.mzw, {
                className: C.modalFooter,
                children: [
                    (0, t.jsx)(d.zxk, {
                        className: C.goBackButton,
                        look: d.iLD.BLANK,
                        color: d.Ttl.PRIMARY,
                        size: d.PhG.SMALL,
                        onClick: l,
                        children: j.intl.string(j.t['/g10LC'])
                    }),
                    (0, t.jsx)('div', {
                        children: (0, t.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            value: m,
                            onChange: (e, n) => x(n),
                            children: (0, t.jsx)(d.Text, {
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
function p(e) {
    let { guildId: n, hideMutedChannels: l, parentId: d } = e,
        c = (0, o.e7)([s.Z], () => s.Z.getCategories(n)),
        r = (0, g.Z)(c),
        h = a.useRef(null);
    return (
        a.useEffect(() => {
            var e;
            null == h || null == (e = h.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, t.jsx)('div', {
            ref: h,
            children: r.map((e) =>
                e.type === i.d.GUILD_CATEGORY
                    ? (0, t.jsx)(k, { name: e.name }, e.id)
                    : (0, t.jsx)(
                          I,
                          {
                              channel: e,
                              hideMutedChannels: l,
                              parentId: d
                          },
                          e.id
                      )
            )
        })
    );
}
function k(e) {
    let { name: n } = e;
    return (0, t.jsx)(d.Text, {
        className: C.categoryRow,
        variant: 'eyebrow',
        color: 'interactive-normal',
        children: n
    });
}
function I(e) {
    let { channel: n, hideMutedChannels: l, parentId: a } = e,
        i = (0, x.s4)(n.id);
    if ((0, o.e7)([u.ZP], () => u.ZP.isChannelMuted(n.guild_id, n.id)) && l) return null;
    let r = (0, c.KS)(n);
    return (0, t.jsxs)(
        'div',
        {
            className: C.channelRow,
            children: [
                (0, t.jsxs)('div', {
                    className: C.channelName,
                    children: [
                        null != r &&
                            (0, t.jsx)('div', {
                                className: C.channelIconContainer,
                                children: (0, t.jsx)(r, {
                                    className: C.channelIcon,
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 20,
                                    width: 20
                                })
                            }),
                        (0, t.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-normal',
                            children: n.name
                        })
                    ]
                }),
                null != i
                    ? (0, t.jsx)(N, { channelId: n.id })
                    : (0, t.jsx)(v, {
                          channelId: n.id,
                          parentId: a
                      })
            ]
        },
        n.id
    );
}
function v(e) {
    let { channelId: n, parentId: l } = e;
    return (0, t.jsx)(d.zxk, {
        look: d.iLD.OUTLINED,
        size: d.PhG.SMALL,
        color: d.Ttl.BRAND,
        onClick: function () {
            (0, m.kj)(n, l);
        },
        children: j.intl.string(j.t.OYkgVl)
    });
}
function N(e) {
    let { channelId: n } = e;
    return (0, t.jsx)(d.zxk, {
        look: d.iLD.FILLED,
        size: d.PhG.SMALL,
        color: d.Ttl.PRIMARY,
        onClick: function () {
            (0, m.oC)(n);
        },
        children: j.intl.string(j.t.N86XcH)
    });
}
