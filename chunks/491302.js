n.d(t, { Z: () => p }), n(653041);
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
    g = n(915536);
function p(e) {
    let { webhook: t, editedWebhook: n, channelOptions: p, isExpanded: b, errors: _, onToggleExpand: f } = e,
        v = l.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, u.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: h.fo$
                  });
        }, [t]),
        C = l.useCallback(() => {
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
        j = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (j.push({
            icon: a.MqZ,
            text: t.source_channel.name
        }),
        j.push({
            text: (0, i.jsx)(
                'span',
                {
                    className: g.guildSource,
                    children: x.intl.format(x.t['H/jJ6e'], {
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
    let N = null;
    return (
        b &&
            null != n &&
            (N = (0, i.jsxs)('div', {
                className: g.body,
                children: [
                    (0, i.jsx)(a.$i$, { className: g.topDivider }),
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
                                                    error: _.name
                                                })
                                            })
                                        }),
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(a.xJW, {
                                                title: x.intl.string(x.t['4TuWfX']),
                                                children: (0, i.jsx)(a.q4e, {
                                                    value: n.channel_id,
                                                    options: p,
                                                    onChange: (e) => {
                                                        s.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(a.$i$, { className: g.bottomDivider }),
                                (0, i.jsx)(d.Z, {
                                    children: (0, i.jsx)(a.zxk, {
                                        onClick: C,
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.RED,
                                        look: a.zxk.Looks.LINK,
                                        className: g.removeButton,
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
            className: g.card,
            children: (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(a.P3F, {
                        className: g.header,
                        'aria-expanded': b,
                        onClick: f,
                        children: (0, i.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    name: t.name,
                                    imageSrc: v,
                                    detailsClassName: g.__invalid_description,
                                    details: j
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: g.expandIcon,
                                    expanded: b,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    N
                ]
            })
        })
    );
}
