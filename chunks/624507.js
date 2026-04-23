n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(123292),
    a = n(314116),
    r = n(778492),
    o = n(404778),
    d = n(331322),
    c = n(292666),
    u = n(691885),
    m = n(359778),
    g = n(939249),
    h = n(157559),
    x = n(282956),
    p = n(824953),
    A = n(147925),
    b = n(486020),
    f = n(447066),
    _ = n(652215),
    j = n(985018),
    N = n(186480);
function v(e) {
    let { webhook: t, editedWebhook: n, channelOptions: v, isExpanded: E, errors: C, onToggleExpand: I } = e,
        T = l.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, b.ku)({ id: t.id, avatar: e, discriminator: _.h3J });
        }, [t]),
        S = l.useCallback(() => {
            (0, a.A)({
                title: j.intl.formatToPlainString(j.t.gBKqZ0, { name: t.name }),
                subtitle: j.intl.string(j.t.zO9jrD),
                confirmText: j.intl.string(j.t.CMy0Cj),
                onConfirm: () => {
                    p.A.delete(t.guild_id, t.id).catch(() => {
                        h.A.show({ title: j.intl.string(j.t.LpbaFV), body: j.intl.string(j.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        y = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (y.push({ icon: r.k, text: t.source_channel.name }),
        y.push({
            text: (0, i.jsx)(
                "span",
                {
                    className: N.lM,
                    children: j.intl.format(j.t["H/jJ6R"], {
                        guildHook: () => (0, i.jsx)("span", { className: N.VZ, children: t.source_guild.name }, t.id),
                    }),
                },
                "guild-source",
            ),
        }));
    let w = null;
    return (
        E &&
            null != n &&
            (w = (0, i.jsxs)("div", {
                className: N.rf,
                children: [
                    (0, i.jsx)(o.c, { className: N.fV }),
                    (0, i.jsxs)(d.B, {
                        gap: 24,
                        children: [
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(c.k, {
                                        label: j.intl.string(j.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            x.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: C.name,
                                    }),
                                    (0, i.jsx)(u.l, {
                                        label: j.intl.string(j.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: v,
                                        onSelectionChange: (e) => {
                                            x.A.updateWebhook({ channelId: e });
                                        },
                                        selectionMode: "single",
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.c, { className: N.Bd }),
                            (0, i.jsx)(s.Q, {
                                onClick: S,
                                size: "sm",
                                variant: "critical",
                                text: j.intl.string(j.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(m.Z, {
            editable: !0,
            className: N.Nr,
            children: (0, i.jsxs)(d.B, {
                children: [
                    (0, i.jsx)(g.D, {
                        className: N.wx,
                        "aria-expanded": E,
                        onClick: I,
                        children: (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, i.jsx)(f.A, { name: t.name, imageSrc: T, details: y }),
                                (0, i.jsx)(A.A, { className: N.eO, expanded: E, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    w,
                ],
            }),
        })
    );
}
