"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(834730),
    c = n(289873),
    u = n(155718),
    d = n(688810),
    _ = n(47167),
    E = n(740075),
    A = n(706727),
    m = n(332173),
    I = n(657331),
    T = n(734057),
    N = n(317525),
    g = n(71393),
    p = n(994500),
    C = n(287809),
    f = n(763754);
n(827669);
var h = n(985018),
    R = n(993560);
let S = { tag: "span", variant: "text-md/normal", color: "text-default" },
    O = { className: s()("mention", R.lE) };
function x(e) {
    return (0, i.jsx)(o.E, { ...S, color: "text-strong", children: e });
}
let M = r.memo(function (e) {
    let t,
        { channel: n, messageId: l, interactionData: s } = e,
        { analyticsLocations: M } = (0, d.Ay)(),
        { onCopy: D, copyRef: P } = (0, E.A)(n, s?.application_command?.id),
        U = (0, a.bG)([g.A], () => g.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (r.useEffect(() => {
            (null == s || (s.type === u.kc.CHAT && void 0 === s.application_command)) && A.S7(n.id, l);
        }, [n.id, l, s]),
        null == s)
    )
        t = (0, i.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE, className: R.u1 });
    else {
        let e = [],
            a = Object.fromEntries((s.application_command?.options ?? []).map((e) => [e.name, e]));
        for (let t of s.options ?? [])
            e = e.concat(
                (function e(t) {
                    let n,
                        {
                            option: l,
                            channel: s,
                            guild: a,
                            messageId: c,
                            parentOptionKey: d,
                            commandOptionSpec: E,
                            sourceAnalyticsLocations: A,
                        } = t,
                        g = null != d ? d + " " + l.name : l.name;
                    if (l.type === u.n4.SUB_COMMAND || l.type === u.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(o.E, { ...S, children: E?.name_localized ?? l.name }),
                                        ],
                                    },
                                    g,
                                ),
                            ],
                            n = Object.fromEntries((E?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of l.options ?? [])
                            t = t.concat(
                                e({
                                    option: i,
                                    channel: s,
                                    guild: a,
                                    messageId: c,
                                    parentOptionKey: g,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: A,
                                }),
                            );
                        return t;
                    }
                    let R = l.value;
                    if (null != l.value)
                        switch (l.type) {
                            case u.n4.USER: {
                                let e = l.value.toString(),
                                    t = C.default.getUser(e);
                                if (null != t) {
                                    let e = (0, f.FT)(t, s);
                                    n = (0, i.jsxs)(m.A, {
                                        ...O,
                                        onClick: () =>
                                            (0, I.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: s.guild_id,
                                                channelId: s.id,
                                                messageId: c,
                                                sourceAnalyticsLocations: A,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case u.n4.CHANNEL: {
                                let e = l.value.toString(),
                                    t = T.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(m.A, { ...O, children: ["#", (0, _.m1)(t, C.default, p.A)] }));
                                break;
                            }
                            case u.n4.ROLE: {
                                let e = l.value.toString(),
                                    t = null != a ? N.A.getRole(a.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(m.A, { ...O, children: ["@", t.name] }));
                                break;
                            }
                            case u.n4.MENTIONABLE: {
                                let e = l.value.toString(),
                                    t = null != a ? N.A.getRole(a.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(m.A, { children: ["@", t.name] });
                                else {
                                    let t = C.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, f.FT)(t, s);
                                        n = (0, i.jsxs)(m.A, {
                                            ...O,
                                            onClick: () =>
                                                (0, I.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: s.guild_id,
                                                    sourceAnalyticsLocations: A,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case u.n4.ATTACHMENT:
                                n = x(h.intl.string(h.t.nONJVc));
                                break;
                            default: {
                                let e = E?.choices?.find((e) => e.value === l.value);
                                null != e && (R = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = x(R?.toString())),
                        [
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.E, { ...S, children: [" ", E?.name_localized ?? l.name, ": "] }),
                                        n,
                                    ],
                                },
                                g,
                            ),
                        ]
                    );
                })({
                    option: t,
                    channel: n,
                    guild: U,
                    messageId: l,
                    parentOptionKey: null,
                    commandOptionSpec: a[t.name],
                    sourceAnalyticsLocations: M,
                }),
            );
        t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.E, { ...S, children: ["/", s.application_command?.name_localized ?? s.name] }), e],
        });
    }
    return (0, i.jsxs)("div", {
        className: R.kL,
        onCopy: (e) => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && D(e, s);
        },
        children: [(0, i.jsx)("div", { className: R.YL, ref: P, children: t }), (0, i.jsx)("div", { className: R.xQ })],
    });
});
