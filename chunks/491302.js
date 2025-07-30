(n.d(t, { Z: () => h }), n(35282), n(539854));
var i = n(255367),
    r = n(73800),
    l = n(755721),
    o = n(481060),
    a = n(668781),
    s = n(139387),
    c = n(308063),
    d = n(600164),
    u = n(259580),
    p = n(768581),
    m = n(486199),
    b = n(981631),
    g = n(388032),
    f = n(405920);
function h(e) {
    let { webhook: t, editedWebhook: n, channelOptions: h, isExpanded: x, errors: j, onToggleExpand: v } = e,
        O = r.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, p.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: b.fo$
                  });
        }, [t]),
        y = r.useCallback(() => {
            (0, o.h7j)((e) => {
                var n, r;
                return (0, i.jsx)(
                    o.ConfirmModal,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            header: g.intl.formatToPlainString(g.t.gBKqZ2, { name: t.name }),
                            confirmText: g.intl.string(g.t.CMy0Cg),
                            cancelText: g.intl.string(g.t['ETE/oK']),
                            onConfirm: () => {
                                c.Z.delete(t.guild_id, t.id).catch(() => {
                                    a.Z.show({
                                        title: g.intl.string(g.t.LpbaFR),
                                        body: g.intl.string(g.t['/4TwKS'])
                                    });
                                });
                            },
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: g.intl.string(g.t.zO9jrK)
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n)
                );
            });
        }, [t.guild_id, t.id, t.name]),
        _ = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (_.push({
            icon: o.MqZ,
            text: t.source_channel.name
        }),
        _.push({
            text: (0, i.jsx)(
                'span',
                {
                    className: f.guildSource,
                    children: g.intl.format(g.t['H/jJ6e'], {
                        guildHook: () =>
                            (0, i.jsx)(
                                'span',
                                {
                                    className: f.sourceName,
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
        x &&
            null != n &&
            (C = (0, i.jsxs)('div', {
                className: f.body,
                children: [
                    (0, i.jsx)(o.$i$, { className: f.topDivider }),
                    (0, i.jsx)(d.Z, {
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsxs)(d.Z, {
                                    children: [
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(o.xJW, {
                                                title: g.intl.string(g.t.I1o5gY),
                                                children: (0, i.jsx)(o.oil, {
                                                    value: n.name,
                                                    onChange: (e) => {
                                                        s.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: j.name
                                                })
                                            })
                                        }),
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(o.xJW, {
                                                title: g.intl.string(g.t['4TuWfX']),
                                                children: (0, i.jsx)(o.q4e, {
                                                    value: n.channel_id,
                                                    options: h,
                                                    onChange: (e) => {
                                                        s.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.$i$, { className: f.bottomDivider }),
                                (0, i.jsx)(d.Z, {
                                    children: (0, i.jsx)(l.zx, {
                                        onClick: y,
                                        size: l.zx.Sizes.SMALL,
                                        color: l.zx.Colors.RED,
                                        look: l.zx.Looks.LINK,
                                        className: f.removeButton,
                                        children: g.intl.string(g.t.CMy0Cg)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })),
        (0, i.jsx)(o.Zbd, {
            editable: !0,
            className: f.card,
            children: (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(o.P3F, {
                        className: f.header,
                        'aria-expanded': x,
                        onClick: v,
                        children: (0, i.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    name: t.name,
                                    imageSrc: O,
                                    detailsClassName: f.__invalid_description,
                                    details: _
                                }),
                                (0, i.jsx)(u.Z, {
                                    className: f.expandIcon,
                                    expanded: x,
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
