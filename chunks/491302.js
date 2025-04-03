n.d(t, { Z: () => f }), n(301563), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(668781),
    a = n(139387),
    s = n(308063),
    c = n(600164),
    d = n(259580),
    u = n(768581),
    p = n(486199),
    m = n(981631),
    b = n(388032),
    g = n(405920);
function f(e) {
    let { webhook: t, editedWebhook: n, channelOptions: f, isExpanded: h, errors: x, onToggleExpand: j } = e,
        N = i.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, u.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: m.fo$
                  });
        }, [t]),
        O = i.useCallback(() => {
            (0, l.h7j)((e) => {
                var n, i;
                return (0, r.jsx)(
                    l.ConfirmModal,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (i = i =
                        {
                            header: b.NW.formatToPlainString(b.t.gBKqZ2, { name: t.name }),
                            confirmText: b.NW.string(b.t.CMy0Cg),
                            cancelText: b.NW.string(b.t['ETE/oK']),
                            onConfirm: () => {
                                s.Z.delete(t.guild_id, t.id).catch(() => {
                                    o.Z.show({
                                        title: b.NW.string(b.t.LpbaFR),
                                        body: b.NW.string(b.t['/4TwKS'])
                                    });
                                });
                            },
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: b.NW.string(b.t.zO9jrK)
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n)
                );
            });
        }, [t.guild_id, t.id, t.name]),
        v = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (v.push({
            icon: l.MqZ,
            text: t.source_channel.name
        }),
        v.push({
            text: (0, r.jsx)(
                'span',
                {
                    className: g.guildSource,
                    children: b.NW.format(b.t['H/jJ6e'], {
                        guildHook: () =>
                            (0, r.jsx)(
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
    let y = null;
    return (
        h &&
            null != n &&
            (y = (0, r.jsxs)('div', {
                className: g.body,
                children: [
                    (0, r.jsx)(l.$i$, { className: g.topDivider }),
                    (0, r.jsx)(c.Z, {
                        children: (0, r.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsxs)(c.Z, {
                                    children: [
                                        (0, r.jsx)(c.Z.Child, {
                                            basis: '50%',
                                            children: (0, r.jsx)(l.xJW, {
                                                title: b.NW.string(b.t.I1o5gY),
                                                children: (0, r.jsx)(l.oil, {
                                                    value: n.name,
                                                    onChange: (e) => {
                                                        a.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: x.name
                                                })
                                            })
                                        }),
                                        (0, r.jsx)(c.Z.Child, {
                                            basis: '50%',
                                            children: (0, r.jsx)(l.xJW, {
                                                title: b.NW.string(b.t['4TuWfX']),
                                                children: (0, r.jsx)(l.q4e, {
                                                    value: n.channel_id,
                                                    options: f,
                                                    onChange: (e) => {
                                                        a.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(l.$i$, { className: g.bottomDivider }),
                                (0, r.jsx)(c.Z, {
                                    children: (0, r.jsx)(l.zxk, {
                                        onClick: O,
                                        size: l.zxk.Sizes.SMALL,
                                        color: l.zxk.Colors.RED,
                                        look: l.zxk.Looks.LINK,
                                        className: g.removeButton,
                                        children: b.NW.string(b.t.CMy0Cg)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })),
        (0, r.jsx)(l.Zbd, {
            editable: !0,
            className: g.card,
            children: (0, r.jsxs)(c.Z, {
                direction: c.Z.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(l.P3F, {
                        className: g.header,
                        'aria-expanded': h,
                        onClick: j,
                        children: (0, r.jsxs)(c.Z, {
                            align: c.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(p.Z, {
                                    name: t.name,
                                    imageSrc: N,
                                    detailsClassName: g.__invalid_description,
                                    details: v
                                }),
                                (0, r.jsx)(d.Z, {
                                    className: g.expandIcon,
                                    expanded: h,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    y
                ]
            })
        })
    );
}
