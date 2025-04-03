n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(692547),
    d = n(481060),
    c = n(239091),
    u = n(87051),
    h = n(225433),
    g = n(933557),
    m = n(775666),
    x = n(471445),
    N = n(592125),
    p = n(324067),
    v = n(699516),
    j = n(9156),
    S = n(594174),
    f = n(823379),
    b = n(621600),
    C = n(423589),
    O = n(221259),
    E = n(113449),
    Z = n(686660),
    _ = n(958648),
    T = n(569658),
    L = n(981631),
    W = n(388032),
    y = n(955549);
let M = s.forwardRef(function (e, t) {
    let { guildId: n, requestScrollToBottom: s } = e,
        l = (0, a.Wu)([N.Z, j.ZP], () =>
            (0, C.OD)(j.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
                .map((e) => N.Z.getChannel(e))
                .filter(f.lm)
        );
    (0, _.Z)(l, () => s());
    let r = (0, a.e7)([p.Z], () => p.Z.getCategories(n)),
        o = l.map((e, t) =>
            (0, i.jsxs)(
                'div',
                {
                    className: y.channelRow,
                    children: [
                        (0, i.jsx)(
                            I,
                            {
                                channel: e,
                                categories: r
                            },
                            e.id
                        ),
                        t < l.length - 1 && (0, i.jsx)('div', { className: y.separator })
                    ]
                },
                e.id
            )
        );
    return (0, i.jsxs)('div', {
        ref: t,
        children: [
            (0, i.jsx)(T.Z, {
                guildId: n,
                onSelected: (e) => {
                    if (null != l.find((t) => t.id === e)) return;
                    let t = N.Z.getChannel(e);
                    null != t &&
                        u.Z.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: j.ZP.resolvedMessageNotifications(t),
                                flags: (0, E.pq)(j.ZP.getChannelIdFlags(t.guild_id, t.id), j.ZP.resolveUnreadSetting(t))
                            },
                            b.ZB.OverrideCreated
                        );
                }
            }),
            o.length > 0 &&
                (0, i.jsxs)('div', {
                    className: y.table,
                    children: [
                        (0, i.jsxs)('div', {
                            className: y.row,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: y.rowName,
                                    children: W.NW.string(W.t.uShwWl)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: y.rowOption,
                                    children: W.NW.string(W.t.hZrr6u)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: y.rowOption,
                                    children: W.NW.string(W.t.y59NJi)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: y.rowOption,
                                    children: W.NW.string(W.t['pGn/bG'])
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: y.rowOption,
                                    children: W.NW.string(W.t['32yow8'])
                                })
                            ]
                        }),
                        o.length > 0 &&
                            (0, i.jsx)('div', {
                                className: y.channels,
                                children: o
                            })
                    ]
                })
        ]
    });
});
function I(e) {
    let { channel: t, categories: n } = e,
        l = (0, d.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        u = (0, a.e7)([N.Z], () => N.Z.getChannel(null == t ? void 0 : t.parent_id)),
        p = (0, O.ZA)(t),
        [j, f] = s.useState(!1);
    if (null == t) return null;
    let b = W.NW.string(W.t.uIzfCA),
        C = (0, x.KS)(t);
    t.type === L.d4z.GUILD_CATEGORY && null != t.guild_id && '' !== t.guild_id ? (b = W.NW.formatToPlainString(W.t['2KzH8/'], { num: null != n[t.id] ? n[t.id].length : 0 })) : null != u && (b = W.NW.formatToPlainString(W.t.L1zJgY, { categoryName: (0, g.F6)(u, S.default, v.Z) }));
    let E = j ? Z.s8.CUSTOM : p.preset;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(y.row, y.channel),
            children: [
                (0, i.jsxs)('div', {
                    className: r()(y.rowName, y.modColor),
                    children: [
                        null != C
                            ? (0, i.jsx)(C, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20,
                                  className: y.icon
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/semibold',
                                    className: y.modColor,
                                    children: (0, g.F6)(t, S.default, v.Z)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    className: y.modColor,
                                    children: b
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: y.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: E === Z.s8.ALL_MESSAGES,
                            onChange: () => ((0, O._m)(t.guild_id, t.id, Z.s8.ALL_MESSAGES), f(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: y.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: E === Z.s8.MENTIONS,
                            onChange: () => ((0, O._m)(t.guild_id, t.id, Z.s8.MENTIONS), f(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: y.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: E === Z.s8.NOTHING,
                            onChange: () => ((0, O._m)(t.guild_id, t.id, Z.s8.NOTHING), f(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: y.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            onClick: (e) => {
                                (0, c.vq)(e, () =>
                                    (0, i.jsx)(d.v2r, {
                                        navId: 'ChannelNotificationCustomSettingsItems',
                                        'aria-label': W.NW.string(W.t.kMdneX),
                                        onClose: () => {},
                                        onSelect: () => {},
                                        children: (0, m.T5)(t, () => f(!1))
                                    })
                                );
                            },
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: E === Z.s8.CUSTOM,
                            onChange: () => f(!0)
                        })
                    })
                }),
                (0, i.jsx)(h.Z, {
                    onClick: () => (0, O.JK)(t.guild_id, t.id),
                    className: y.removeButton
                })
            ]
        })
    });
}
