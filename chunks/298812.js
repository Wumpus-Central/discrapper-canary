n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(442837),
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
    N = n(699516),
    S = n(9156),
    j = n(594174),
    C = n(823379),
    f = n(621600),
    E = n(423589),
    Z = n(221259),
    b = n(113449),
    _ = n(686660),
    T = n(958648),
    L = n(569658),
    O = n(981631),
    M = n(388032),
    I = n(749021);
let A = s.forwardRef(function (e, t) {
    let { guildId: n, requestScrollToBottom: s } = e,
        l = (0, r.Wu)([p.Z, S.ZP], () =>
            (0, E.OD)(S.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
                .map((e) => p.Z.getChannel(e))
                .filter(C.lm)
        );
    (0, T.Z)(l, () => s());
    let a = (0, r.e7)([v.Z], () => v.Z.getCategories(n)),
        o = l.map((e, t) =>
            (0, i.jsxs)(
                'div',
                {
                    className: I.channelRow,
                    children: [
                        (0, i.jsx)(
                            R,
                            {
                                channel: e,
                                categories: a
                            },
                            e.id
                        ),
                        t < l.length - 1 && (0, i.jsx)('div', { className: I.separator })
                    ]
                },
                e.id
            )
        );
    return (0, i.jsxs)('div', {
        ref: t,
        children: [
            (0, i.jsx)(L.Z, {
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
                                flags: (0, b.pq)(S.ZP.getChannelIdFlags(t.guild_id, t.id), S.ZP.resolveUnreadSetting(t))
                            },
                            f.ZB.OverrideCreated
                        );
                }
            }),
            o.length > 0 &&
                (0, i.jsxs)('div', {
                    className: I.table,
                    children: [
                        (0, i.jsxs)('div', {
                            className: I.row,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: I.rowName,
                                    children: M.intl.string(M.t.uShwWl)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: I.rowOption,
                                    children: M.intl.string(M.t.hZrr6u)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: I.rowOption,
                                    children: M.intl.string(M.t.y59NJi)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: I.rowOption,
                                    children: M.intl.string(M.t['pGn/bG'])
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: I.rowOption,
                                    children: M.intl.string(M.t['32yow8'])
                                })
                            ]
                        }),
                        o.length > 0 &&
                            (0, i.jsx)('div', {
                                className: I.channels,
                                children: o
                            })
                    ]
                })
        ]
    });
});
function R(e) {
    let { channel: t, categories: n } = e,
        l = (0, d.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        u = (0, r.e7)([p.Z], () => p.Z.getChannel(null == t ? void 0 : t.parent_id)),
        v = (0, Z.ZA)(t),
        [S, C] = s.useState(!1);
    if (null == t) return null;
    let f = M.intl.string(M.t.uIzfCA),
        E = (0, x.KS)(t);
    t.type === O.d4z.GUILD_CATEGORY && null != t.guild_id && '' !== t.guild_id ? (f = M.intl.formatToPlainString(M.t['2KzH8/'], { num: null != n[t.id] ? n[t.id].length : 0 })) : null != u && (f = M.intl.formatToPlainString(M.t.L1zJgY, { categoryName: (0, g.F6)(u, j.default, N.Z) }));
    let b = S ? _.s8.CUSTOM : v.preset;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: a()(I.row, I.channel),
            children: [
                (0, i.jsxs)('div', {
                    className: a()(I.rowName, I.modColor),
                    children: [
                        null != E
                            ? (0, i.jsx)(E, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20,
                                  className: I.icon
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/semibold',
                                    className: I.modColor,
                                    children: (0, g.F6)(t, j.default, N.Z)
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    className: I.modColor,
                                    children: f
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: I.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: b === _.s8.ALL_MESSAGES,
                            onChange: () => ((0, Z._m)(t.guild_id, t.id, _.s8.ALL_MESSAGES), C(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: I.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: b === _.s8.MENTIONS,
                            onChange: () => ((0, Z._m)(t.guild_id, t.id, _.s8.MENTIONS), C(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: I.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: b === _.s8.NOTHING,
                            onChange: () => ((0, Z._m)(t.guild_id, t.id, _.s8.NOTHING), C(!1))
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: I.rowOption,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.XZJ, {
                            onClick: (e) => {
                                (0, c.vq)(e, () =>
                                    (0, i.jsx)(d.v2r, {
                                        navId: 'ChannelNotificationCustomSettingsItems',
                                        'aria-label': M.intl.string(M.t.kMdneX),
                                        onClose: () => {},
                                        onSelect: () => {},
                                        children: (0, m.T5)(t, () => C(!1))
                                    })
                                );
                            },
                            color: l,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: b === _.s8.CUSTOM,
                            onChange: () => C(!0)
                        })
                    })
                }),
                (0, i.jsx)(h.Z, {
                    onClick: () => (0, Z.JK)(t.guild_id, t.id),
                    className: I.removeButton
                })
            ]
        })
    });
}
