n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    N = n(71393),
    f = n(994500),
    C = n(287809),
    g = n(763754);
n(827669);
var h = n(985018),
    p = n(99245);
let R = { tag: "span", variant: "text-md/normal", color: "text-default" },
    S = { className: r()("mention", p.lE) };
function x(e) {
    return (0, i.jsx)(o.Text, { ...R, color: "text-strong", children: e });
}
let O = l.memo(function (e) {
    let t,
        { channel: n, messageId: a, interactionData: r } = e,
        { analyticsLocations: O } = (0, d.Ay)(),
        { onCopy: M, copyRef: D } = (0, _.A)(n, r?.application_command?.id),
        P = (0, s.bG)([N.A], () => N.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (l.useEffect(() => {
            (null == r || (r.type === c.kc.CHAT && void 0 === r.application_command)) && m.S7(n.id, a);
        }, [n.id, a, r]),
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
                            option: a,
                            channel: r,
                            guild: s,
                            messageId: d,
                            parentOptionKey: _,
                            commandOptionSpec: m,
                            sourceAnalyticsLocations: N,
                        } = t,
                        p = null != _ ? _ + " " + a.name : a.name;
                    if (a.type === c.n4.SUB_COMMAND || a.type === c.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(o.Text, { ...R, children: m?.name_localized ?? a.name }),
                                        ],
                                    },
                                    p,
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
                                    parentOptionKey: p,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: N,
                                }),
                            );
                        return t;
                    }
                    let O = a.value;
                    if (null != a.value)
                        switch (a.type) {
                            case c.n4.USER: {
                                let e = a.value.toString(),
                                    t = C.default.getUser(e);
                                if (null != t) {
                                    let e = (0, g.FT)(t, r);
                                    n = (0, i.jsxs)(A.A, {
                                        ...S,
                                        onClick: () =>
                                            (0, E.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: r.guild_id,
                                                channelId: r.id,
                                                messageId: d,
                                                sourceAnalyticsLocations: N,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case c.n4.CHANNEL: {
                                let e = a.value.toString(),
                                    t = I.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(A.A, { ...S, children: ["#", (0, u.m1)(t, C.default, f.A)] }));
                                break;
                            }
                            case c.n4.ROLE: {
                                let e = a.value.toString(),
                                    t = null != s ? T.A.getRole(s.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(A.A, { ...S, children: ["@", t.name] }));
                                break;
                            }
                            case c.n4.MENTIONABLE: {
                                let e = a.value.toString(),
                                    t = null != s ? T.A.getRole(s.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(A.A, { children: ["@", t.name] });
                                else {
                                    let t = C.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, g.FT)(t, r);
                                        n = (0, i.jsxs)(A.A, {
                                            ...S,
                                            onClick: () =>
                                                (0, E.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: r.guild_id,
                                                    sourceAnalyticsLocations: N,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case c.n4.ATTACHMENT:
                                n = x(h.intl.string(h.t.nONJVc));
                                break;
                            default: {
                                let e = m?.choices?.find((e) => e.value === a.value);
                                null != e && (O = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = x(O?.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...R,
                                            children: [" ", m?.name_localized ?? a.name, ": "],
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
                    messageId: a,
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
