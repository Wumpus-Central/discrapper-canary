n.d(t, { Z: () => x }), n(35282), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(199849),
    o = n(248514),
    s = n(481060),
    c = n(668781),
    d = n(139387),
    u = n(308063),
    m = n(259580),
    b = n(768581),
    p = n(486199),
    g = n(981631),
    f = n(388032),
    h = n(546151);
function x(e) {
    let { webhook: t, editedWebhook: n, channelOptions: x, isExpanded: j, errors: v, onToggleExpand: O } = e,
        y = r.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, b.ov)({
                      id: t.id,
                      avatar: e,
                      discriminator: g.fo$,
                  });
        }, [t]),
        C = r.useCallback(() => {
            (0, o.Z)({
                title: f.intl.formatToPlainString(f.t.gBKqZ0, { name: t.name }),
                subtitle: f.intl.string(f.t.zO9jrD),
                confirmText: f.intl.string(f.t.CMy0Cj),
                onConfirm: () => {
                    u.Z.delete(t.guild_id, t.id).catch(() => {
                        c.Z.show({
                            title: f.intl.string(f.t.LpbaFV),
                            body: f.intl.string(f.t["/4TwKf"]),
                        });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        N = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (N.push({
            icon: s.MqZ,
            text: t.source_channel.name,
        }),
        N.push({
            text: (0, i.jsx)(
                "span",
                {
                    className: h.guildSource,
                    children: f.intl.format(f.t["H/jJ6R"], {
                        guildHook: () =>
                            (0, i.jsx)(
                                "span",
                                {
                                    className: h.sourceName,
                                    children: t.source_guild.name,
                                },
                                t.id,
                            ),
                    }),
                },
                "guild-source",
            ),
        }));
    let S = null;
    return (
        j &&
            null != n &&
            (S = (0, i.jsxs)("div", {
                className: h.body,
                children: [
                    (0, i.jsx)(s.izJ, { className: h.topDivider }),
                    (0, i.jsxs)(s.Kqy, {
                        gap: 24,
                        children: [
                            (0, i.jsxs)(s.Kqy, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(s.oil, {
                                        label: f.intl.string(f.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            d.Z.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: v.name,
                                    }),
                                    (0, i.jsx)(a.y6, {
                                        label: f.intl.string(f.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: x,
                                        onChange: (e) => {
                                            d.Z.updateWebhook({ channelId: e });
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(s.izJ, { className: h.bottomDivider }),
                            (0, i.jsx)(l.Avr, {
                                onClick: C,
                                size: "sm",
                                variant: "critical",
                                text: f.intl.string(f.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(s.Zbd, {
            editable: !0,
            className: h.card,
            children: (0, i.jsxs)(s.Kqy, {
                children: [
                    (0, i.jsx)(s.P3F, {
                        className: h.header,
                        "aria-expanded": j,
                        onClick: O,
                        children: (0, i.jsxs)(s.Kqy, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, i.jsx)(p.Z, {
                                    name: t.name,
                                    imageSrc: y,
                                    details: N,
                                }),
                                (0, i.jsx)(m.Z, {
                                    className: h.expandIcon,
                                    expanded: j,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    S,
                ],
            }),
        })
    );
}
