n.d(t, { Z: () => f }), n(35282), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(481060),
    o = n(668781),
    s = n(139387),
    c = n(308063),
    d = n(259580),
    u = n(768581),
    p = n(486199),
    m = n(981631),
    b = n(388032),
    g = n(101649);
function f(e) {
    let { webhook: t, editedWebhook: f, channelOptions: h, isExpanded: x, errors: j, onToggleExpand: v } = e,
        O = r.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, u.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: m.fo$,
                  });
        }, [t]),
        y = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) => {
                    var r, l;
                    return (0, i.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                header: b.intl.formatToPlainString(b.t.gBKqZ0, { name: t.name }),
                                confirmText: b.intl.string(b.t.CMy0Cj),
                                cancelText: b.intl.string(b.t["ETE/oC"]),
                                onConfirm: () => {
                                    c.Z.delete(t.guild_id, t.id).catch(() => {
                                        o.Z.show({
                                            title: b.intl.string(b.t.LpbaFV),
                                            body: b.intl.string(b.t["/4TwKf"]),
                                        });
                                    });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    children: b.intl.string(b.t.zO9jrD),
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r),
                    );
                };
            });
        }, [t.guild_id, t.id, t.name]),
        _ = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (_.push({
            icon: a.MqZ,
            text: t.source_channel.name,
        }),
        _.push({
            text: (0, i.jsx)(
                "span",
                {
                    className: g.guildSource,
                    children: b.intl.format(b.t["H/jJ6R"], {
                        guildHook: () =>
                            (0, i.jsx)(
                                "span",
                                {
                                    className: g.sourceName,
                                    children: t.source_guild.name,
                                },
                                t.id,
                            ),
                    }),
                },
                "guild-source",
            ),
        }));
    let C = null;
    return (
        x &&
            null != f &&
            (C = (0, i.jsxs)("div", {
                className: g.body,
                children: [
                    (0, i.jsx)(a.izJ, { className: g.topDivider }),
                    (0, i.jsxs)(a.Kqy, {
                        gap: 24,
                        children: [
                            (0, i.jsxs)(a.Kqy, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(a.oil, {
                                        label: b.intl.string(b.t.I1o5gV),
                                        value: f.name,
                                        onChange: (e) => {
                                            s.Z.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: j.name,
                                    }),
                                    (0, i.jsx)(a.q4e, {
                                        label: b.intl.string(b.t["4TuWfc"]),
                                        value: f.channel_id,
                                        options: h,
                                        onChange: (e) => {
                                            s.Z.updateWebhook({ channelId: e });
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(a.izJ, { className: g.bottomDivider }),
                            (0, i.jsx)(l.Avr, {
                                onClick: y,
                                size: "sm",
                                variant: "critical",
                                text: b.intl.string(b.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(a.Zbd, {
            editable: !0,
            className: g.card,
            children: (0, i.jsxs)(a.Kqy, {
                children: [
                    (0, i.jsx)(a.P3F, {
                        className: g.header,
                        "aria-expanded": x,
                        onClick: v,
                        children: (0, i.jsxs)(a.Kqy, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, i.jsx)(p.Z, {
                                    name: t.name,
                                    imageSrc: O,
                                    details: _,
                                }),
                                (0, i.jsx)(d.Z, {
                                    className: g.expandIcon,
                                    expanded: x,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    C,
                ],
            }),
        })
    );
}
