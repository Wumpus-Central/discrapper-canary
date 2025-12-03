n.d(t, { Z: () => h }), n(35282), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(248514),
    o = n(481060),
    s = n(668781),
    c = n(139387),
    d = n(308063),
    u = n(259580),
    p = n(768581),
    m = n(486199),
    b = n(981631),
    g = n(388032),
    f = n(941678);
function h(e) {
    let { webhook: t, editedWebhook: n, channelOptions: h, isExpanded: x, errors: j, onToggleExpand: v } = e,
        O = r.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, p.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: b.fo$,
                  });
        }, [t]),
        y = r.useCallback(() => {
            (0, a.Z)({
                title: g.intl.formatToPlainString(g.t.gBKqZ0, { name: t.name }),
                subtitle: g.intl.string(g.t.zO9jrD),
                confirmText: g.intl.string(g.t.CMy0Cj),
                onConfirm: () => {
                    d.Z.delete(t.guild_id, t.id).catch(() => {
                        s.Z.show({
                            title: g.intl.string(g.t.LpbaFV),
                            body: g.intl.string(g.t["/4TwKf"]),
                        });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        _ = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (_.push({
            icon: o.MqZ,
            text: t.source_channel.name,
        }),
        _.push({
            text: (0, i.jsx)(
                "span",
                {
                    className: f.guildSource,
                    children: g.intl.format(g.t["H/jJ6R"], {
                        guildHook: () =>
                            (0, i.jsx)(
                                "span",
                                {
                                    className: f.sourceName,
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
            null != n &&
            (C = (0, i.jsxs)("div", {
                className: f.body,
                children: [
                    (0, i.jsx)(o.izJ, { className: f.topDivider }),
                    (0, i.jsxs)(o.Kqy, {
                        gap: 24,
                        children: [
                            (0, i.jsxs)(o.Kqy, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(o.oil, {
                                        label: g.intl.string(g.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            c.Z.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: j.name,
                                    }),
                                    (0, i.jsx)(o.q4e, {
                                        label: g.intl.string(g.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: h,
                                        onChange: (e) => {
                                            c.Z.updateWebhook({ channelId: e });
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.izJ, { className: f.bottomDivider }),
                            (0, i.jsx)(l.Avr, {
                                onClick: y,
                                size: "sm",
                                variant: "critical",
                                text: g.intl.string(g.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(o.Zbd, {
            editable: !0,
            className: f.card,
            children: (0, i.jsxs)(o.Kqy, {
                children: [
                    (0, i.jsx)(o.P3F, {
                        className: f.header,
                        "aria-expanded": x,
                        onClick: v,
                        children: (0, i.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, i.jsx)(m.Z, {
                                    name: t.name,
                                    imageSrc: O,
                                    details: _,
                                }),
                                (0, i.jsx)(u.Z, {
                                    className: f.expandIcon,
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
