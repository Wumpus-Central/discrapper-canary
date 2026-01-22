n.d(t, {
    Ay: () => g,
    JB: () => f,
    z$: () => p,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(580424),
    s = n(696451),
    o = n(248465),
    l = n(427262),
    c = n(634788),
    u = n(374803);
n(827669);
var d = n(985018);
function f(e, t, n) {
    return o.Ay.hasSameRoleAsUsername(t, e)
        ? "".concat("@").concat(e.tag)
        : "".concat("@").concat(l.Ay.getUserTag(e, { identifiable: n ? "never" : "always" }));
}
function p(e) {
    return "<@".concat(e.id, ">");
}
function _(e) {
    return e.text;
}
function h(e) {
    return "".concat("@").concat(e.name);
}
function m(e) {
    return "<@&".concat(e.id, ">");
}
let g = {
    sentinel: "@",
    stores: [s.Ay],
    matches: (e, t, n, r, i) =>
        i.mentions.user !== u.Vf.DENY || i.mentions.role !== u.eP.DENY || i.mentions.global !== u.VN.DENY,
    queryResults(e, t, n, r, i) {
        let a = r.mentions.global === u.VN.ALLOW_EVERYONE || r.mentions.global === u.VN.ALLOW_EVERYONE_OR_HERE,
            s = r.mentions.global === u.VN.ALLOW_EVERYONE_OR_HERE,
            l = r.mentions.user !== u.Vf.DENY,
            c = r.mentions.role !== u.eP.DENY,
            d = r.mentions.user === u.Vf.ALLOW_GUILD,
            f = r.mentions.role === u.eP.ALLOW_ALL;
        return {
            results: o.Ay.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: a,
                canMentionHere: s,
                canMentionUsers: l,
                canMentionRoles: c,
                canMentionOtherGlobals: r.mentions.otherGlobals,
                includeAllGuildUsers: d,
                includeNonMentionableRoles: f,
                request: i,
            }),
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: s, globals: o, roles: l },
                selectedIndex: f,
                channel: p,
                query: _,
                options: h,
                onHover: m,
                onClick: g,
            } = e,
            E = s.map((e, t) =>
                (0, r.jsx)(
                    a.Ay.User,
                    {
                        guildId: p.guild_id,
                        onClick: g,
                        onHover: m,
                        selected: f === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: h.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            b = o.map((e, t) =>
                (0, r.jsx)(
                    a.Ay.Generic,
                    {
                        onClick: g,
                        onHover: m,
                        selected: f === t + s.length,
                        index: s.length + t,
                        text: e.text,
                        description: h.hideMentionDescription ? null : e.description,
                        "aria-label": e.text,
                        badge: "@game" === e.text || "@time" === e.text ? "new" : void 0,
                    },
                    e.text,
                ),
            ),
            y = l.map((e, t) =>
                (0, r.jsx)(
                    a.Ay.Role,
                    {
                        onClick: g,
                        onHover: m,
                        selected: f === t + s.length + o.length,
                        index: s.length + o.length + t,
                        role: e,
                        hideDescription: h.hideMentionDescription,
                        guildId: p.guild_id,
                    },
                    e.id,
                ),
            );
        return (
            h.mentions.user === u.Vf.DENY
                ? ((t = d.t.MLiD1e), (n = d.intl.string(d.t["LPJmL/"])))
                : ((t = d.t.rPNimn), (n = d.intl.string(d.t["9Oq93m"]))),
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, c.wZ)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: _,
                            getQuery: (e) => "".concat("@").concat(e),
                        }),
                        E,
                        s.length > 0 && o.length > 0 ? (0, r.jsx)(a.Ay.Divider, {}) : null,
                        b,
                        (s.length > 0 && l.length > 0) || (o.length > 0 && l.length > 0)
                            ? (0, r.jsx)(a.Ay.Divider, {})
                            : null,
                        y,
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
                options: a,
                channel: s,
            } = e,
            o = t[i],
            l = n[i - t.length],
            c = r[i - t.length - n.length],
            d = u.kc.MENTION;
        return (
            null != o
                ? a.insertText(f(o.user, s, a.hidePersonalInformation), p(o.user))
                : null != l
                  ? null != l.inlineAutocompleteType
                      ? (a.insertAutocompleteInput(l.inlineAutocompleteType),
                        (d = "timestampMentionInput" === l.inlineAutocompleteType ? u.kc.TIMESTAMP : u.kc.GAME_MENTION))
                      : a.insertText(_(l))
                  : null != c && a.insertText(h(c), m(c)),
            { type: d }
        );
    },
};
