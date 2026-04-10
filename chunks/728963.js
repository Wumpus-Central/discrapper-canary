"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    c = n(397927),
    o = n(155718),
    u = n(688810),
    d = n(47167),
    _ = n(740075),
    E = n(706727),
    A = n(332173),
    m = n(657331),
    I = n(734057),
    T = n(317525),
    g = n(71393),
    N = n(994500),
    f = n(287809),
    p = n(763754);
n(827669);
var C = n(985018),
    h = n(572168);
let S = { tag: "span", variant: "text-md/normal", color: "text-default" },
    R = { className: l()("mention", h.lE) };
function x(e) {
    return (0, i.jsx)(c.Text, { ...S, color: "text-strong", children: e });
}
let O = r.memo(function (e) {
    let t,
        { channel: n, messageId: s, interactionData: l } = e,
        { analyticsLocations: O } = (0, u.Ay)(),
        { onCopy: M, copyRef: D } = (0, _.A)(n, l?.application_command?.id),
        U = (0, a.bG)([g.A], () => g.A.getGuild(n.guild_id), [n.guild_id]);
    if (
        (r.useEffect(() => {
            (null == l || (l.type === o.kc.CHAT && void 0 === l.application_command)) && E.S7(n.id, s);
        }, [n.id, s, l]),
        null == l)
    )
        t = (0, i.jsx)(c.y$y, { type: c.y$y.Type.SPINNING_CIRCLE, className: h.u1 });
    else {
        let e = [],
            a = Object.fromEntries((l.application_command?.options ?? []).map((e) => [e.name, e]));
        for (let t of l.options ?? [])
            e = e.concat(
                (function e(t) {
                    let n,
                        {
                            option: s,
                            channel: l,
                            guild: a,
                            messageId: u,
                            parentOptionKey: _,
                            commandOptionSpec: E,
                            sourceAnalyticsLocations: g,
                        } = t,
                        h = null != _ ? _ + " " + s.name : s.name;
                    if (s.type === o.n4.SUB_COMMAND || s.type === o.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, i.jsx)(c.Text, { ...S, children: E?.name_localized ?? s.name }),
                                        ],
                                    },
                                    h,
                                ),
                            ],
                            n = Object.fromEntries((E?.options ?? [])?.map((e) => [e.name, e]));
                        for (let i of s.options ?? [])
                            t = t.concat(
                                e({
                                    option: i,
                                    channel: l,
                                    guild: a,
                                    messageId: u,
                                    parentOptionKey: h,
                                    commandOptionSpec: n[i.name],
                                    sourceAnalyticsLocations: g,
                                }),
                            );
                        return t;
                    }
                    let O = s.value;
                    if (null != s.value)
                        switch (s.type) {
                            case o.n4.USER: {
                                let e = s.value.toString(),
                                    t = f.default.getUser(e);
                                if (null != t) {
                                    let e = (0, p.FT)(t, l);
                                    n = (0, i.jsxs)(A.A, {
                                        ...R,
                                        onClick: () =>
                                            (0, m.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: l.guild_id,
                                                channelId: l.id,
                                                messageId: u,
                                                sourceAnalyticsLocations: g,
                                            }),
                                        children: ["@", e.nick],
                                    });
                                }
                                break;
                            }
                            case o.n4.CHANNEL: {
                                let e = s.value.toString(),
                                    t = I.A.getChannel(e);
                                null != t &&
                                    (n = (0, i.jsxs)(A.A, { ...R, children: ["#", (0, d.m1)(t, f.default, N.A)] }));
                                break;
                            }
                            case o.n4.ROLE: {
                                let e = s.value.toString(),
                                    t = null != a ? T.A.getRole(a.id, e) : void 0;
                                null != t && (n = (0, i.jsxs)(A.A, { ...R, children: ["@", t.name] }));
                                break;
                            }
                            case o.n4.MENTIONABLE: {
                                let e = s.value.toString(),
                                    t = null != a ? T.A.getRole(a.id, e) : void 0;
                                if (null != t) n = (0, i.jsxs)(A.A, { children: ["@", t.name] });
                                else {
                                    let t = f.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, p.FT)(t, l);
                                        n = (0, i.jsxs)(A.A, {
                                            ...R,
                                            onClick: () =>
                                                (0, m.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: l.guild_id,
                                                    sourceAnalyticsLocations: g,
                                                }),
                                            children: ["@", e.nick],
                                        });
                                    }
                                }
                                break;
                            }
                            case o.n4.ATTACHMENT:
                                n = x(C.intl.string(C.t.nONJVc));
                                break;
                            default: {
                                let e = E?.choices?.find((e) => e.value === s.value);
                                null != e && (O = e.name_localized ?? e.name);
                            }
                        }
                    return (
                        null == n && (n = x(O?.toString())),
                        [
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(c.Text, {
                                            ...S,
                                            children: [" ", E?.name_localized ?? s.name, ": "],
                                        }),
                                        n,
                                    ],
                                },
                                h,
                            ),
                        ]
                    );
                })({
                    option: t,
                    channel: n,
                    guild: U,
                    messageId: s,
                    parentOptionKey: null,
                    commandOptionSpec: a[t.name],
                    sourceAnalyticsLocations: O,
                }),
            );
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.Text, { ...S, children: ["/", l.application_command?.name_localized ?? l.name] }),
                e,
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: h.kL,
        onCopy: (e) => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && M(e, l);
        },
        children: [(0, i.jsx)("div", { className: h.YL, ref: D, children: t }), (0, i.jsx)("div", { className: h.xQ })],
    });
});
