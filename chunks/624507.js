n.d(t, { A: () => A }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(314116),
    r = n(397927),
    o = n(157559),
    d = n(282956),
    c = n(824953),
    u = n(147925),
    m = n(486020),
    g = n(447066),
    x = n(652215),
    h = n(985018),
    p = n(58339);
function A(e) {
    let { webhook: t, editedWebhook: n, channelOptions: A, isExpanded: b, errors: _, onToggleExpand: f } = e,
        N = l.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, m.ku)({ id: t.id, avatar: e, discriminator: x.h3J });
        }, [t]),
        j = l.useCallback(() => {
            (0, a.A)({
                title: h.intl.formatToPlainString(h.t.gBKqZ0, { name: t.name }),
                subtitle: h.intl.string(h.t.zO9jrD),
                confirmText: h.intl.string(h.t.CMy0Cj),
                onConfirm: () => {
                    c.A.delete(t.guild_id, t.id).catch(() => {
                        o.A.show({ title: h.intl.string(h.t.LpbaFV), body: h.intl.string(h.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        T = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (T.push({ icon: r.koX, text: t.source_channel.name }),
        T.push({
            text: (0, i.jsx)(
                "span",
                {
                    className: p.lM,
                    children: h.intl.format(h.t["H/jJ6R"], {
                        guildHook: () => (0, i.jsx)("span", { className: p.VZ, children: t.source_guild.name }, t.id),
                    }),
                },
                "guild-source",
            ),
        }));
    let v = null;
    return (
        b &&
            null != n &&
            (v = (0, i.jsxs)("div", {
                className: p.rf,
                children: [
                    (0, i.jsx)(r.cGx, { className: p.fV }),
                    (0, i.jsxs)(r.BJc, {
                        gap: 24,
                        children: [
                            (0, i.jsxs)(r.BJc, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(r.ksK, {
                                        label: h.intl.string(h.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            d.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: _.name,
                                    }),
                                    (0, i.jsx)(r.l6P, {
                                        label: h.intl.string(h.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: A,
                                        onSelectionChange: (e) => {
                                            d.A.updateWebhook({ channelId: e });
                                        },
                                        selectionMode: "single",
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.cGx, { className: p.Bd }),
                            (0, i.jsx)(s.QWc, {
                                onClick: j,
                                size: "sm",
                                variant: "critical",
                                text: h.intl.string(h.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(r.ZpM, {
            editable: !0,
            className: p.Nr,
            children: (0, i.jsxs)(r.BJc, {
                children: [
                    (0, i.jsx)(r.DUT, {
                        className: p.wx,
                        "aria-expanded": b,
                        onClick: f,
                        children: (0, i.jsxs)(r.BJc, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, i.jsx)(g.A, { name: t.name, imageSrc: N, details: T }),
                                (0, i.jsx)(u.A, { className: p.eO, expanded: b, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    v,
                ],
            }),
        })
    );
}
