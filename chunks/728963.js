n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    c = n(155718),
    d = n(688810),
    u = n(740075),
    m = n(706727),
    _ = n(332173),
    A = n(657331),
    h = n(734057),
    f = n(317525),
    E = n(71393),
    g = n(287809),
    p = n(763754);
n(827669);
var x = n(985018),
    C = n(99245);
let I = { tag: "span", variant: "text-md/normal", color: "text-default" },
    T = { className: r()("mention", C.lE) };
function N(e) {
    return (0, i.jsx)(o.Text, { ...I, color: "text-strong", children: e });
}
let S = l.memo(function (e) {
    let t,
        { channel: n, messageId: a, interactionData: r } = e,
        { analyticsLocations: S } = (0, d.Ay)(),
        { onCopy: R, copyRef: v } = (0, u.A)(n, r?.application_command?.id),
        M = (0, s.bG)([E.A], () => E.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (l.useEffect(() => {
            (null == r || (r.type === c.kc.CHAT && void 0 === r.application_command)) && m.S7(n.id, a);
        }, [n.id, a, r]),
        null == r)
    )
        t = (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: C.u1 });
    else {
        let e = [],
            s = Object.fromEntries((r.application_command?.options ?? []).map((e) => [e.name, e]));
        for (let t of r.options ?? [])
            e = e.concat(
                (function e(t) {
                    let n,
                        {
                            option: a,
                            channel: r,
                            guild: s,
                            messageId: d,
                            parentOptionKey: u,
                            commandOptionSpec: m,
                            sourceAnalyticsLocations: E,
                        } = t,
                        C = null != u ? u + " " + a.name : a.name;
                    if (a.type === c.n4.SUB_COMMAND || a.type === c.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(o.Text, { ...I, children: m?.name_localized ?? a.name }),
                                        ],
                                    },
                                    C,
                                ),
                            ],
                            n = Object.fromEntries((m?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of a.options ?? [])
                            t = t.concat(
                                e({
                                    option: i,
                                    channel: r,
                                    guild: s,
                                    messageId: d,
                                    parentOptionKey: C,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: E,
                                }),
                            );
                        return t;
                    }
                    let S = a.value;
                    if (null != a.value)
                        switch (a.type) {
                            case c.n4.USER: {
                                let e = a.value.toString(),
                                    t = g.default.getUser(e);
                                if (null != t) {
                                    let e = (0, p.FT)(t, r);
                                    n = (0, i.jsxs)(_.A, {
                                        ...T,
                                        onClick: () =>
                                            (0, A.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: r.guild_id,
                                                channelId: r.id,
                                                messageId: d,
                                                sourceAnalyticsLocations: E,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case c.n4.CHANNEL: {
                                let e = a.value.toString(),
                                    t = h.A.getChannel(e);
                                null != t && (n = (0, i.jsxs)(_.A, { ...T, children: ["#", t.name] }));
                                break;
                            }
                            case c.n4.ROLE: {
                                let e = a.value.toString(),
                                    t = null != s ? f.A.getRole(s.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(_.A, { ...T, children: ["@", t.name] }));
                                break;
                            }
                            case c.n4.MENTIONABLE: {
                                let e = a.value.toString(),
                                    t = null != s ? f.A.getRole(s.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(_.A, { children: ["@", t.name] });
                                else {
                                    let t = g.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, p.FT)(t, r);
                                        n = (0, i.jsxs)(_.A, {
                                            ...T,
                                            onClick: () =>
                                                (0, A.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: r.guild_id,
                                                    sourceAnalyticsLocations: E,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case c.n4.ATTACHMENT:
                                n = N(x.intl.string(x.t.nONJVc));
                                break;
                            default: {
                                let e = m?.choices?.find((e) => e.value === a.value);
                                null != e && (S = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = N(S?.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...I,
                                            children: [" ", m?.name_localized ?? a.name, ": "],
                                        }),
                                        n,
                                    ],
                                },
                                C,
                            ),
                        ]
                    );
                })({
                    option: t,
                    channel: n,
                    guild: M,
                    messageId: a,
                    parentOptionKey: null,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: S,
                }),
            );
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, { ...I, children: ["/", r.application_command?.name_localized ?? r.name] }),
                e,
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: C.kL,
        onCopy: (e) => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && R(e, r);
        },
        children: [(0, i.jsx)("div", { className: C.YL, ref: v, children: t }), (0, i.jsx)("div", { className: C.xQ })],
    });
});
