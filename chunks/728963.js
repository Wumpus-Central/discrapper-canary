n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(155718),
    c = n(688810),
    u = n(740075),
    m = n(706727),
    _ = n(332173),
    h = n(657331),
    p = n(734057),
    g = n(317525),
    A = n(71393),
    f = n(287809),
    x = n(763754);
n(827669);
var E = n(985018),
    C = n(998815);
let I = { tag: "span", variant: "text-md/normal", color: "text-default" },
    T = { className: r()("mention", C.lE) };
function v(e) {
    return (0, i.jsx)(o.Text, { ...I, color: "text-strong", children: e });
}
let N = l.memo(function (e) {
    let t,
        { channel: n, messageId: a, interactionData: r } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        { onCopy: S, copyRef: b } = (0, u.A)(n, r?.application_command?.id),
        y = (0, s.bG)([A.A], () => A.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (l.useEffect(() => {
            (null == r || (r.type === d.kc.CHAT && void 0 === r.application_command)) && m.S7(n.id, a);
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
                            messageId: c,
                            parentOptionKey: u,
                            commandOptionSpec: m,
                            sourceAnalyticsLocations: A,
                        } = t,
                        C = null != u ? u + " " + a.name : a.name;
                    if (a.type === d.n4.SUB_COMMAND || a.type === d.n4.SUB_COMMAND_GROUP) {
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
                                    messageId: c,
                                    parentOptionKey: C,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: A,
                                }),
                            );
                        return t;
                    }
                    let N = a.value;
                    if (null != a.value)
                        switch (a.type) {
                            case d.n4.USER: {
                                let e = a.value.toString(),
                                    t = f.default.getUser(e);
                                if (null != t) {
                                    let e = (0, x.FT)(t, r);
                                    n = (0, i.jsxs)(_.A, {
                                        ...T,
                                        onClick: () =>
                                            (0, h.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: r.guild_id,
                                                channelId: r.id,
                                                messageId: c,
                                                sourceAnalyticsLocations: A,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case d.n4.CHANNEL: {
                                let e = a.value.toString(),
                                    t = p.A.getChannel(e);
                                null != t && (n = (0, i.jsxs)(_.A, { ...T, children: ["#", t.name] }));
                                break;
                            }
                            case d.n4.ROLE: {
                                let e = a.value.toString(),
                                    t = null != s ? g.A.getRole(s.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(_.A, { ...T, children: ["@", t.name] }));
                                break;
                            }
                            case d.n4.MENTIONABLE: {
                                let e = a.value.toString(),
                                    t = null != s ? g.A.getRole(s.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(_.A, { children: ["@", t.name] });
                                else {
                                    let t = f.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, x.FT)(t, r);
                                        n = (0, i.jsxs)(_.A, {
                                            ...T,
                                            onClick: () =>
                                                (0, h.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: r.guild_id,
                                                    sourceAnalyticsLocations: A,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case d.n4.ATTACHMENT:
                                n = v(E.intl.string(E.t.nONJVc));
                                break;
                            default: {
                                let e = m?.choices?.find((e) => e.value === a.value);
                                null != e && (N = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = v(N?.toString())),
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
                    guild: y,
                    messageId: a,
                    parentOptionKey: null,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: N,
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
            t.startsWith("/") && t.endsWith("\n") && S(e, r);
        },
        children: [(0, i.jsx)("div", { className: C.YL, ref: b, children: t }), (0, i.jsx)("div", { className: C.xQ })],
    });
});
