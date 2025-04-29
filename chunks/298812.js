n.d(t, { Z: () => I }), n(388685);
var i = n(255367),
    s = n(73800),
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
    p = n(592125),
    v = n(324067),
    j = n(699516),
    S = n(9156),
    N = n(594174),
    f = n(823379),
    b = n(621600),
    C = n(423589),
    O = n(221259),
    E = n(113449),
    Z = n(686660),
    _ = n(958648),
    T = n(569658),
    L = n(981631),
    y = n(388032),
    M = n(955549);
let I = s.forwardRef(function (e, t) {
    let { guildId: n, requestScrollToBottom: s } = e,
        l = (0, a.Wu)([p.Z, S.ZP], () =>
            (0, C.OD)(S.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
                .map((e) => p.Z.getChannel(e))
                .filter(f.lm)
        );
    (0, _.Z)(l, () => s());
    let r = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
        o = l.map((e, t) =>
            (0, i.jsxs)(
                'div',
                {
                    className: M.channelRow,
                    children: [
                        (0, i.jsx)(
                            P,
                            {
                                channel: e,
                                categories: r
                            },
                            e.id
                        ),
                        t < l.length - 1 && (0, i.jsx)('div', { className: M.separator })
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
                    let t = p.Z.getChannel(e);
                    null != t &&
                        u.Z.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: S.ZP.resolvedMessageNotifications(t),
                                flags: (0, E.pq)(S.ZP.getChannelIdFlags(t.guild_id, t.id), S.ZP.resolveUnreadSetting(t))
                            },
                            b.ZB.OverrideCreated
                        );
                }
            }),
            o.length > 0 &&
                (0, i.jsxs)('div', {
                    className: M.table,
                    children: [
                        (0, i.jsxs)('div', {
                            className: M.row,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowName,
                                    children: y.intl.string(y.t.uShwWl)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: y.intl.string(y.t.hZrr6u)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: y.intl.string(y.t.y59NJi)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: y.intl.string(y.t['pGn/bG'])
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: y.intl.string(y.t['32yow8'])
                                })
                            ]
                        }),
                        o.length > 0 &&
                            (0, i.jsx)('div', {
                                className: M.channels,
                                children: o
                            })
                    ]
                })
        ]
    });
});
function P(e) {
    let { channel: t, categories: n } = e,
        l = (0, d.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        u = (0, a.e7)([p.Z], () => p.Z.getChannel(null == t ? void 0 : t.parent_id)),
        v = (0, O.ZA)(t),
        [S, f] = s.useState(!1);
    if (null == t) return null;
    let b = y.intl.string(y.t.uIzfCA),
        C = (0, x.KS)(t);
    t.type === L.d4z.GUILD_CATEGORY && null != t.guild_id && '' !== t.guild_id ? (b = y.intl.formatToPlainString(y.t['2KzH8/'], { num: null != n[t.id] ? n[t.id].length : 0 })) : null != u && (b = y.intl.formatToPlainString(y.t.L1zJgY, { categoryName: (0, g.F6)(u, N.default, j.Z) }));
    let E = S ? Z.s8.CUSTOM : v.preset;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(M.row, M.channel),
            children: [
                (0, i.jsxs)('div', {
                    className: r()(M.rowName, M.modColor),
                    children: [
                        null != C
                            ? (0, i.jsx)(C, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20,
                                  className: M.icon
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/semibold',
                                    className: M.modColor,
                                    children: (0, g.F6)(t, N.default, j.Z)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    className: M.modColor,
                                    children: b
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: M.rowOption,
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
                    className: M.rowOption,
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
                    className: M.rowOption,
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
                    className: M.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            onClick: (e) => {
                                (0, c.vq)(e, () =>
                                    (0, i.jsx)(d.v2r, {
                                        navId: 'ChannelNotificationCustomSettingsItems',
                                        'aria-label': y.intl.string(y.t.kMdneX),
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
                    className: M.removeButton
                })
            ]
        })
    });
}
