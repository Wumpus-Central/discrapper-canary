n.d(t, { Z: () => g }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(668781),
    s = n(139387),
    o = n(308063),
    d = n(600164),
    c = n(259580),
    u = n(768581),
    m = n(486199),
    h = n(981631),
    x = n(388032),
    p = n(88817);
function g(e) {
    let { webhook: t, editedWebhook: n, channelOptions: g, isExpanded: f, errors: b, onToggleExpand: v } = e,
        _ = l.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, u.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: h.fo$
                  });
        }, [t]),
        j = l.useCallback(() => {
            (0, a.h7j)((e) =>
                (0, i.jsx)(a.ConfirmModal, {
                    ...e,
                    header: x.intl.formatToPlainString(x.t.gBKqZ2, { name: t.name }),
                    confirmText: x.intl.string(x.t.CMy0Cg),
                    cancelText: x.intl.string(x.t['ETE/oK']),
                    onConfirm: () => {
                        o.Z.delete(t.guild_id, t.id).catch(() => {
                            r.Z.show({
                                title: x.intl.string(x.t.LpbaFR),
                                body: x.intl.string(x.t['/4TwKS'])
                            });
                        });
                    },
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: x.intl.string(x.t.zO9jrK)
                    })
                })
            );
        }, [t.guild_id, t.id, t.name]),
        N = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (N.push({
            icon: a.MqZ,
            text: t.source_channel.name
        }),
        N.push({
            text: (0, i.jsx)(
                'span',
                {
                    className: p.guildSource,
                    children: x.intl.format(x.t['H/jJ6e'], {
                        guildHook: () =>
                            (0, i.jsx)(
                                'span',
                                {
                                    className: p.sourceName,
                                    children: t.source_guild.name
                                },
                                t.id
                            )
                    })
                },
                'guild-source'
            )
        }));
    let C = null;
    return (
        f &&
            null != n &&
            (C = (0, i.jsxs)('div', {
                className: p.body,
                children: [
                    (0, i.jsx)(a.$i$, { className: p.topDivider }),
                    (0, i.jsx)(d.Z, {
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsxs)(d.Z, {
                                    children: [
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(a.xJW, {
                                                title: x.intl.string(x.t.I1o5gY),
                                                children: (0, i.jsx)(a.oil, {
                                                    value: n.name,
                                                    onChange: (e) => {
                                                        s.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: b.name
                                                })
                                            })
                                        }),
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(a.xJW, {
                                                title: x.intl.string(x.t['4TuWfX']),
                                                children: (0, i.jsx)(a.q4e, {
                                                    value: n.channel_id,
                                                    options: g,
                                                    onChange: (e) => {
                                                        s.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(a.$i$, { className: p.bottomDivider }),
                                (0, i.jsx)(d.Z, {
                                    children: (0, i.jsx)(a.zxk, {
                                        onClick: j,
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.RED,
                                        look: a.zxk.Looks.LINK,
                                        className: p.removeButton,
                                        children: x.intl.string(x.t.CMy0Cg)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })),
        (0, i.jsx)(a.Zbd, {
            editable: !0,
            className: p.card,
            children: (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(a.P3F, {
                        className: p.header,
                        'aria-expanded': f,
                        onClick: v,
                        children: (0, i.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    name: t.name,
                                    imageSrc: _,
                                    detailsClassName: p.__invalid_description,
                                    details: N
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: p.expandIcon,
                                    expanded: f,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    C
                ]
            })
        })
    );
}
