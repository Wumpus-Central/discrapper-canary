n(47120);
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
    S = n(592125),
    p = n(324067),
    v = n(699516),
    N = n(9156),
    j = n(594174),
    C = n(823379),
    f = n(621600),
    E = n(423589),
    b = n(221259),
    _ = n(113449),
    T = n(686660),
    Z = n(958648),
    O = n(569658),
    L = n(981631),
    I = n(388032),
    M = n(532868);
function A(e) {
    let { channel: t, categories: n } = e,
        l = (0, d.useToken)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        u = (0, a.e7)([S.Z], () => S.Z.getChannel(null == t ? void 0 : t.parent_id)),
        p = (0, b.ZA)(t),
        [N, C] = s.useState(!1);
    if (null == t) return null;
    let f = I.intl.string(I.t.uIzfCA),
        E = (0, x.KS)(t);
    t.type === L.d4z.GUILD_CATEGORY && null != t.guild_id && '' !== t.guild_id ? (f = I.intl.formatToPlainString(I.t['2KzH8/'], { num: null != n[t.id] ? n[t.id].length : 0 })) : null != u && (f = I.intl.formatToPlainString(I.t.L1zJgY, { categoryName: (0, g.F6)(u, j.default, v.Z) }));
    let _ = N ? T.s8.CUSTOM : p.preset;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(M.row, M.channel),
            children: [
                (0, i.jsxs)('div', {
                    className: r()(M.rowName, M.modColor),
                    children: [
                        null != E
                            ? (0, i.jsx)(E, {
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
                                    children: (0, g.F6)(t, j.default, v.Z)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    className: M.modColor,
                                    children: f
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: M.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Checkbox, {
                            color: l,
                            shape: d.Checkbox.Shapes.ROUND,
                            type: d.Checkbox.Types.INVERTED,
                            value: _ === T.s8.ALL_MESSAGES,
                            onChange: () => ((0, b._m)(t.guild_id, t.id, T.s8.ALL_MESSAGES), C(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: M.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Checkbox, {
                            color: l,
                            shape: d.Checkbox.Shapes.ROUND,
                            type: d.Checkbox.Types.INVERTED,
                            value: _ === T.s8.MENTIONS,
                            onChange: () => ((0, b._m)(t.guild_id, t.id, T.s8.MENTIONS), C(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: M.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Checkbox, {
                            color: l,
                            shape: d.Checkbox.Shapes.ROUND,
                            type: d.Checkbox.Types.INVERTED,
                            value: _ === T.s8.NOTHING,
                            onChange: () => ((0, b._m)(t.guild_id, t.id, T.s8.NOTHING), C(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: M.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Checkbox, {
                            onClick: (e) => {
                                (0, c.vq)(e, () =>
                                    (0, i.jsx)(d.Menu, {
                                        navId: 'ChannelNotificationCustomSettingsItems',
                                        'aria-label': I.intl.string(I.t.kMdneX),
                                        onClose: () => {},
                                        onSelect: () => {},
                                        children: (0, m.T5)(t, () => C(!1))
                                    })
                                );
                            },
                            color: l,
                            shape: d.Checkbox.Shapes.ROUND,
                            type: d.Checkbox.Types.INVERTED,
                            value: _ === T.s8.CUSTOM,
                            onChange: () => C(!0)
                        })
                    })
                }),
                (0, i.jsx)(h.Z, {
                    onClick: () => (0, b.JK)(t.guild_id, t.id),
                    className: M.removeButton
                })
            ]
        })
    });
}
t.Z = s.forwardRef(function (e, t) {
    let { guildId: n, requestScrollToBottom: s } = e,
        l = (0, a.Wu)([S.Z, N.ZP], () =>
            (0, E.OD)(N.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
                .map((e) => S.Z.getChannel(e))
                .filter(C.lm)
        );
    (0, Z.Z)(l, () => s());
    let r = (0, a.e7)([p.Z], () => p.Z.getCategories(n)),
        o = l.map((e, t) =>
            (0, i.jsxs)(
                'div',
                {
                    className: M.channelRow,
                    children: [
                        (0, i.jsx)(
                            A,
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
            (0, i.jsx)(O.Z, {
                guildId: n,
                onSelected: (e) => {
                    if (null != l.find((t) => t.id === e)) return;
                    let t = S.Z.getChannel(e);
                    null != t &&
                        u.Z.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: N.ZP.resolvedMessageNotifications(t),
                                flags: (0, _.pq)(N.ZP.getChannelIdFlags(t.guild_id, t.id), N.ZP.resolveUnreadSetting(t))
                            },
                            f.ZB.OverrideCreated
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
                                    children: I.intl.string(I.t.uShwWl)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: I.intl.string(I.t.hZrr6u)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: I.intl.string(I.t.y59NJi)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: I.intl.string(I.t['pGn/bG'])
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: M.rowOption,
                                    children: I.intl.string(I.t['32yow8'])
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
