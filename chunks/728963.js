n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    c = n(155718),
    d = n(688810),
    u = n(47167),
    m = n(740075),
    _ = n(706727),
    A = n(332173),
    E = n(657331),
    f = n(734057),
    h = n(317525),
    g = n(71393),
    p = n(994500),
    x = n(287809),
    C = n(763754);
n(827669);
var I = n(985018),
    T = n(998815);
let N = { tag: "span", variant: "text-md/normal", color: "text-default" },
    S = { className: r()("mention", T.lE) };
function R(e) {
    return (0, i.jsx)(o.Text, { ...N, color: "text-strong", children: e });
}
let v = l.memo(function (e) {
    let t,
        { channel: n, messageId: a, interactionData: r } = e,
        { analyticsLocations: v } = (0, d.Ay)(),
        { onCopy: O, copyRef: M } = (0, m.A)(n, r?.application_command?.id),
        j = (0, s.bG)([g.A], () => g.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (l.useEffect(() => {
            (null == r || (r.type === c.kc.CHAT && void 0 === r.application_command)) && _.S7(n.id, a);
        }, [n.id, a, r]),
        null == r)
    )
        t = (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: T.u1 });
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
                            parentOptionKey: m,
                            commandOptionSpec: _,
                            sourceAnalyticsLocations: g,
                        } = t,
                        T = null != m ? m + " " + a.name : a.name;
                    if (a.type === c.n4.SUB_COMMAND || a.type === c.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(o.Text, { ...N, children: _?.name_localized ?? a.name }),
                                        ],
                                    },
                                    T,
                                ),
                            ],
                            n = Object.fromEntries((_?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of a.options ?? [])
                            t = t.concat(
                                e({
                                    option: i,
                                    channel: r,
                                    guild: s,
                                    messageId: d,
                                    parentOptionKey: T,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: g,
                                }),
                            );
                        return t;
                    }
                    let v = a.value;
                    if (null != a.value)
                        switch (a.type) {
                            case c.n4.USER: {
                                let e = a.value.toString(),
                                    t = x.default.getUser(e);
                                if (null != t) {
                                    let e = (0, C.FT)(t, r);
                                    n = (0, i.jsxs)(A.A, {
                                        ...S,
                                        onClick: () =>
                                            (0, E.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: r.guild_id,
                                                channelId: r.id,
                                                messageId: d,
                                                sourceAnalyticsLocations: g,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case c.n4.CHANNEL: {
                                let e = a.value.toString(),
                                    t = f.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(A.A, { ...S, children: ["#", (0, u.m1)(t, x.default, p.A)] }));
                                break;
                            }
                            case c.n4.ROLE: {
                                let e = a.value.toString(),
                                    t = null != s ? h.A.getRole(s.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(A.A, { ...S, children: ["@", t.name] }));
                                break;
                            }
                            case c.n4.MENTIONABLE: {
                                let e = a.value.toString(),
                                    t = null != s ? h.A.getRole(s.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(A.A, { children: ["@", t.name] });
                                else {
                                    let t = x.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, C.FT)(t, r);
                                        n = (0, i.jsxs)(A.A, {
                                            ...S,
                                            onClick: () =>
                                                (0, E.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: r.guild_id,
                                                    sourceAnalyticsLocations: g,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case c.n4.ATTACHMENT:
                                n = R(I.intl.string(I.t.nONJVc));
                                break;
                            default: {
                                let e = _?.choices?.find((e) => e.value === a.value);
                                null != e && (v = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = R(v?.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...N,
                                            children: [" ", _?.name_localized ?? a.name, ": "],
                                        }),
                                        n,
                                    ],
                                },
                                T,
                            ),
                        ]
                    );
                })({
                    option: t,
                    channel: n,
                    guild: j,
                    messageId: a,
                    parentOptionKey: null,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: v,
                }),
            );
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, { ...N, children: ["/", r.application_command?.name_localized ?? r.name] }),
                e,
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: T.kL,
        onCopy: (e) => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && O(e, r);
        },
        children: [(0, i.jsx)("div", { className: T.YL, ref: M, children: t }), (0, i.jsx)("div", { className: T.xQ })],
    });
});
