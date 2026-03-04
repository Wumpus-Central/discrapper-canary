"use strict";
n.d(t, { Ay: () => E });
var r = n(627968),
    i = n(64700),
    s = n(580424),
    a = n(696451),
    o = n(248465),
    l = n(427262),
    u = n(634788),
    c = n(374803);
n(827669);
var d = n(985018);
function _(e, t, n) {
    return o.Ay.hasSameRoleAsUsername(t, e)
        ? `@${e.tag}`
        : `@${l.Ay.getUserTag(e, { identifiable: n ? "never" : "always" })}`;
}
function f(e) {
    return `<@${e.id}>`;
}
function p(e) {
    return e.text;
}
function h(e) {
    return `@${e.name}`;
}
function m(e) {
    return `<@&${e.id}>`;
}
let E = {
    sentinel: "@",
    stores: [a.Ay],
    matches: (e, t, n, r, i) =>
        i.mentions.user !== c.Vf.DENY || i.mentions.role !== c.eP.DENY || i.mentions.global !== c.VN.DENY,
    queryResults(e, t, n, r, i) {
        let s = r.mentions.global === c.VN.ALLOW_EVERYONE || r.mentions.global === c.VN.ALLOW_EVERYONE_OR_HERE,
            a = r.mentions.global === c.VN.ALLOW_EVERYONE_OR_HERE,
            l = r.mentions.user !== c.Vf.DENY,
            u = r.mentions.role !== c.eP.DENY,
            d = r.mentions.user === c.Vf.ALLOW_GUILD,
            _ = r.mentions.role === c.eP.ALLOW_ALL;
        return {
            results: o.Ay.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: s,
                canMentionHere: a,
                canMentionUsers: l,
                canMentionRoles: u,
                canMentionOtherGlobals: r.mentions.otherGlobals,
                includeAllGuildUsers: d,
                includeNonMentionableRoles: _,
                request: i,
            }),
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: a, globals: o, roles: l },
                selectedIndex: _,
                channel: f,
                query: p,
                options: h,
                onHover: m,
                onClick: E,
            } = e,
            g = a.map((e, t) =>
                (0, r.jsx)(
                    s.Ay.User,
                    {
                        guildId: f.guild_id,
                        onClick: E,
                        onHover: m,
                        selected: _ === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: h.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            A = o.map((e, t) =>
                (0, r.jsx)(
                    s.Ay.Generic,
                    {
                        onClick: E,
                        onHover: m,
                        selected: _ === t + a.length,
                        index: a.length + t,
                        text: e.text,
                        description: h.hideMentionDescription ? null : e.description,
                        "aria-label": e.text,
                    },
                    e.text,
                ),
            ),
            I = l.map((e, t) =>
                (0, r.jsx)(
                    s.Ay.Role,
                    {
                        onClick: E,
                        onHover: m,
                        selected: _ === t + a.length + o.length,
                        index: a.length + o.length + t,
                        role: e,
                        hideDescription: h.hideMentionDescription,
                        guildId: f.guild_id,
                    },
                    e.id,
                ),
            );
        return (
            h.mentions.user === c.Vf.DENY
                ? ((t = d.t.MLiD1e), (n = d.intl.string(d.t["LPJmL/"])))
                : ((t = d.t.rPNimn), (n = d.intl.string(d.t["9Oq93m"]))),
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, u.wZ)({ titleWithQuery: t, titleWithoutQuery: n, query: p, getQuery: (e) => `@${e}` }),
                        g,
                        a.length > 0 && o.length > 0 ? (0, r.jsx)(s.Ay.Divider, {}) : null,
                        A,
                        (a.length > 0 && l.length > 0) || (o.length > 0 && l.length > 0)
                            ? (0, r.jsx)(s.Ay.Divider, {})
                            : null,
                        I,
                    ],
                },
                "mentions",
            )
        );
    },
    onSelect(e) {
        let {
                results: { users: t, globals: n, roles: r },
                index: i,
                options: s,
                channel: a,
            } = e,
            o = t[i],
            l = n[i - t.length],
            u = r[i - t.length - n.length],
            d = c.kc.MENTION;
        return (
            null != o
                ? s.insertText(_(o.user, a, s.hidePersonalInformation), f(o.user))
                : null != l
                  ? null != l.inlineAutocompleteType
                      ? (s.insertAutocompleteInput(l.inlineAutocompleteType),
                        (d = "timestampMentionInput" === l.inlineAutocompleteType ? c.kc.TIMESTAMP : c.kc.GAME_MENTION))
                      : s.insertText(p(l))
                  : null != u && s.insertText(h(u), m(u)),
            { type: d }
        );
    },
};
