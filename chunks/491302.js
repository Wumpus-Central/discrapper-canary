n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(668781),
    o = n(139387),
    s = n(308063),
    d = n(600164),
    c = n(259580),
    u = n(768581),
    m = n(486199),
    h = n(981631),
    p = n(388032),
    g = n(88817);
function x(e) {
    let { webhook: t, editedWebhook: n, channelOptions: x, isExpanded: f, errors: b, onToggleExpand: v } = e,
        C = l.useMemo(() => {
            var e, n;
            return (
                (e = t),
                null != (n = t.avatar) && /^data:/.test(n)
                    ? n
                    : (0, u.ov)({
                          id: e.id,
                          avatar: n,
                          discriminator: h.fo$
                      })
            );
        }, [t]),
        N = l.useCallback(() => {
            (0, r.openModal)((e) =>
                (0, i.jsx)(r.ConfirmModal, {
                    ...e,
                    header: p.intl.formatToPlainString(p.t.gBKqZ2, { name: t.name }),
                    confirmText: p.intl.string(p.t.CMy0Cg),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: () => {
                        s.Z.delete(t.guild_id, t.id).catch(() => {
                            a.Z.show({
                                title: p.intl.string(p.t.LpbaFR),
                                body: p.intl.string(p.t['/4TwKS'])
                            });
                        });
                    },
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: p.intl.string(p.t.zO9jrK)
                    })
                })
            );
        }, [t.guild_id, t.id, t.name]),
        I = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (I.push({
            icon: r.AnnouncementsIcon,
            text: t.source_channel.name
        }),
        I.push({
            text: (0, i.jsx)(
                'span',
                {
                    className: g.guildSource,
                    children: p.intl.format(p.t['H/jJ6e'], {
                        guildHook: () =>
                            (0, i.jsx)(
                                'span',
                                {
                                    className: g.sourceName,
                                    children: t.source_guild.name
                                },
                                t.id
                            )
                    })
                },
                'guild-source'
            )
        }));
    let j = null;
    return (
        f &&
            null != n &&
            (j = (0, i.jsxs)('div', {
                className: g.body,
                children: [
                    (0, i.jsx)(r.FormDivider, { className: g.topDivider }),
                    (0, i.jsx)(d.Z, {
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsxs)(d.Z, {
                                    children: [
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(r.FormItem, {
                                                title: p.intl.string(p.t.I1o5gY),
                                                children: (0, i.jsx)(r.TextInput, {
                                                    value: n.name,
                                                    onChange: (e) => {
                                                        o.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: b.name
                                                })
                                            })
                                        }),
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(r.FormItem, {
                                                title: p.intl.string(p.t['4TuWfX']),
                                                children: (0, i.jsx)(r.SingleSelect, {
                                                    value: n.channel_id,
                                                    options: x,
                                                    onChange: (e) => {
                                                        o.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(r.FormDivider, { className: g.bottomDivider }),
                                (0, i.jsx)(d.Z, {
                                    children: (0, i.jsx)(r.Button, {
                                        onClick: N,
                                        size: r.Button.Sizes.SMALL,
                                        color: r.Button.Colors.RED,
                                        look: r.Button.Looks.LINK,
                                        className: g.removeButton,
                                        children: p.intl.string(p.t.CMy0Cg)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })),
        (0, i.jsx)(r.Card, {
            editable: !0,
            className: g.card,
            children: (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(r.Clickable, {
                        className: g.header,
                        'aria-expanded': f,
                        onClick: v,
                        children: (0, i.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    name: t.name,
                                    imageSrc: C,
                                    detailsClassName: g.__invalid_description,
                                    details: I
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: g.expandIcon,
                                    expanded: f,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    j
                ]
            })
        })
    );
}
