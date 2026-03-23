n.d(t, { A: () => O });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(155718),
    d = n(688810),
    u = n(47167),
    _ = n(740075),
    m = n(706727),
    A = n(332173),
    E = n(657331),
    I = n(734057),
    T = n(317525),
    f = n(71393),
    N = n(994500),
    C = n(287809),
    g = n(763754);
n(827669);
var h = n(985018),
    p = n(998815);
let R = { tag: "span", variant: "text-md/normal", color: "text-default" },
    x = { className: r()("mention", p.lE) };
function S(e) {
    return (0, i.jsx)(o.Text, { ...R, color: "text-strong", children: e });
}
let O = a.memo(function (e) {
    let t,
        { channel: n, messageId: l, interactionData: r } = e,
        { analyticsLocations: O } = (0, d.Ay)(),
        { onCopy: M, copyRef: D } = (0, _.A)(n, r?.application_command?.id),
        P = (0, s.bG)([f.A], () => f.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (a.useEffect(() => {
            (null == r || (r.type === c.kc.CHAT && void 0 === r.application_command)) && m.S7(n.id, l);
        }, [n.id, l, r]),
        null == r)
    )
        t = (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: p.u1 });
    else {
        let e = [],
            s = Object.fromEntries((r.application_command?.options ?? []).map((e) => [e.name, e]));
        for (let t of r.options ?? [])
            e = e.concat(
                (function e(t) {
                    let n,
                        {
                            option: l,
                            channel: r,
                            guild: s,
                            messageId: d,
                            parentOptionKey: _,
                            commandOptionSpec: m,
                            sourceAnalyticsLocations: f,
                        } = t,
                        p = null != _ ? _ + " " + l.name : l.name;
                    if (l.type === c.n4.SUB_COMMAND || l.type === c.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(o.Text, { ...R, children: m?.name_localized ?? l.name }),
                                        ],
                                    },
                                    p,
                                ),
                            ],
                            n = Object.fromEntries((m?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of l.options ?? [])
                            t = t.concat(
                                e({
                                    option: i,
                                    channel: r,
                                    guild: s,
                                    messageId: d,
                                    parentOptionKey: p,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: f,
                                }),
                            );
                        return t;
                    }
                    let O = l.value;
                    if (null != l.value)
                        switch (l.type) {
                            case c.n4.USER: {
                                let e = l.value.toString(),
                                    t = C.default.getUser(e);
                                if (null != t) {
                                    let e = (0, g.FT)(t, r);
                                    n = (0, i.jsxs)(A.A, {
                                        ...x,
                                        onClick: () =>
                                            (0, E.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: r.guild_id,
                                                channelId: r.id,
                                                messageId: d,
                                                sourceAnalyticsLocations: f,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case c.n4.CHANNEL: {
                                let e = l.value.toString(),
                                    t = I.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(A.A, { ...x, children: ["#", (0, u.m1)(t, C.default, N.A)] }));
                                break;
                            }
                            case c.n4.ROLE: {
                                let e = l.value.toString(),
                                    t = null != s ? T.A.getRole(s.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(A.A, { ...x, children: ["@", t.name] }));
                                break;
                            }
                            case c.n4.MENTIONABLE: {
                                let e = l.value.toString(),
                                    t = null != s ? T.A.getRole(s.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(A.A, { children: ["@", t.name] });
                                else {
                                    let t = C.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, g.FT)(t, r);
                                        n = (0, i.jsxs)(A.A, {
                                            ...x,
                                            onClick: () =>
                                                (0, E.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: r.guild_id,
                                                    sourceAnalyticsLocations: f,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case c.n4.ATTACHMENT:
                                n = S(h.intl.string(h.t.nONJVc));
                                break;
                            default: {
                                let e = m?.choices?.find((e) => e.value === l.value);
                                null != e && (O = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = S(O?.toString())),
                        [
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...R,
                                            children: [" ", m?.name_localized ?? l.name, ": "],
                                        }),
                                        n,
                                    ],
                                },
                                p,
                            ),
                        ]
                    );
                })({
                    option: t,
                    channel: n,
                    guild: P,
                    messageId: l,
                    parentOptionKey: null,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: O,
                }),
            );
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, { ...R, children: ["/", r.application_command?.name_localized ?? r.name] }),
                e,
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: p.kL,
        onCopy: (e) => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && M(e, r);
        },
        children: [(0, i.jsx)("div", { className: p.YL, ref: D, children: t }), (0, i.jsx)("div", { className: p.xQ })],
    });
});
