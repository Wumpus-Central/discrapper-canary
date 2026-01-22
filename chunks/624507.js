n.d(t, {
    A: () => h,
}),
    n(747238),
    n(321073);
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(314116),
    s = n(397927),
    o = n(157559),
    c = n(282956),
    d = n(824953),
    u = n(147925),
    b = n(486020),
    f = n(447066),
    p = n(652215),
    m = n(985018),
    g = n(58339);

function h(e) {
    let { webhook: t, editedWebhook: n, channelOptions: h, isExpanded: x, errors: j, onToggleExpand: O } = e,
        y = r.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, b.ku)({
                      id: t.id,
                      avatar: e,
                      discriminator: p.h3J,
                  });
        }, [t]),
        A = r.useCallback(() => {
            (0, a.A)({
                title: m.intl.formatToPlainString(m.t.gBKqZ0, {
                    name: t.name,
                }),
                subtitle: m.intl.string(m.t.zO9jrD),
                confirmText: m.intl.string(m.t.CMy0Cj),
                onConfirm: () => {
                    d.A.delete(t.guild_id, t.id).catch(() => {
                        o.A.show({
                            title: m.intl.string(m.t.LpbaFV),
                            body: m.intl.string(m.t["/4TwKf"]),
                        });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        v = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (v.push({
            icon: s.koX,
            text: t.source_channel.name,
        }),
        v.push({
            text: (0, i.jsx)(
                "span",
                {
                    className: g.lM,
                    children: m.intl.format(m.t["H/jJ6R"], {
                        guildHook: () =>
                            (0, i.jsx)(
                                "span",
                                {
                                    className: g.VZ,
                                    children: t.source_guild.name,
                                },
                                t.id,
                            ),
                    }),
                },
                "guild-source",
            ),
        }));
    let N = null;
    return (
        x &&
            null != n &&
            (N = (0, i.jsxs)("div", {
                className: g.rf,
                children: [
                    (0, i.jsx)(s.cGx, {
                        className: g.fV,
                    }),
                    (0, i.jsxs)(s.BJc, {
                        gap: 24,
                        children: [
                            (0, i.jsxs)(s.BJc, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(s.ksK, {
                                        label: m.intl.string(m.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            c.A.updateWebhook({
                                                name: e,
                                            });
                                        },
                                        maxLength: 80,
                                        error: j.name,
                                    }),
                                    (0, i.jsx)(s.l6P, {
                                        label: m.intl.string(m.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: h,
                                        onSelectionChange: (e) => {
                                            c.A.updateWebhook({
                                                channelId: e,
                                            });
                                        },
                                        selectionMode: "single",
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(s.cGx, {
                                className: g.Bd,
                            }),
                            (0, i.jsx)(l.QWc, {
                                onClick: A,
                                size: "sm",
                                variant: "critical",
                                text: m.intl.string(m.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(s.ZpM, {
            editable: !0,
            className: g.Nr,
            children: (0, i.jsxs)(s.BJc, {
                children: [
                    (0, i.jsx)(s.DUT, {
                        className: g.wx,
                        "aria-expanded": x,
                        onClick: O,
                        children: (0, i.jsxs)(s.BJc, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, i.jsx)(f.A, {
                                    name: t.name,
                                    imageSrc: y,
                                    details: v,
                                }),
                                (0, i.jsx)(u.A, {
                                    className: g.eO,
                                    expanded: x,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    N,
                ],
            }),
        })
    );
}
