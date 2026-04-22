n.d(t, { Ay: () => d });
var l = n(627968),
    r = n(64700),
    i = n(580424),
    s = n(696451),
    o = n(248465),
    u = n(427262),
    a = n(634788),
    m = n(374803);
n(827669);
var c = n(985018);
let d = {
    sentinel: "@",
    stores: [s.Ay],
    matches: (e, t, n, l, r) =>
        r.mentions.user !== m.Vf.DENY || r.mentions.role !== m.eP.DENY || r.mentions.global !== m.VN.DENY,
    queryResults(e, t, n, l, r) {
        let i = l.mentions.global === m.VN.ALLOW_EVERYONE || l.mentions.global === m.VN.ALLOW_EVERYONE_OR_HERE,
            s = l.mentions.global === m.VN.ALLOW_EVERYONE_OR_HERE,
            u = l.mentions.user !== m.Vf.DENY,
            a = l.mentions.role !== m.eP.DENY,
            c = l.mentions.user === m.Vf.ALLOW_GUILD,
            d = l.mentions.role === m.eP.ALLOW_ALL;
        return {
            results: o.Ay.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: i,
                canMentionHere: s,
                canMentionUsers: u,
                canMentionRoles: a,
                canMentionOtherGlobals: l.mentions.otherGlobals,
                includeAllGuildUsers: c,
                includeNonMentionableRoles: d,
                request: r,
            }),
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: s, globals: o, roles: u },
                selectedIndex: d,
                channel: p,
                query: y,
                options: A,
                onHover: h,
                onClick: g,
            } = e,
            M = s.map((e, t) =>
                (0, l.jsx)(
                    i.Ay.User,
                    {
                        guildId: p.guild_id,
                        onClick: g,
                        onHover: h,
                        selected: d === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: A.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            I = o.map((e, t) =>
                (0, l.jsx)(
                    i.Ay.Generic,
                    {
                        onClick: g,
                        onHover: h,
                        selected: d === t + s.length,
                        index: s.length + t,
                        text: e.text,
                        description: A.hideMentionDescription ? null : e.description,
                        "aria-label": e.text,
                    },
                    e.text,
                ),
            ),
            N = u.map((e, t) =>
                (0, l.jsx)(
                    i.Ay.Role,
                    {
                        onClick: g,
                        onHover: h,
                        selected: d === t + s.length + o.length,
                        index: s.length + o.length + t,
                        role: e,
                        hideDescription: A.hideMentionDescription,
                        guildId: p.guild_id,
                    },
                    e.id,
                ),
            );
        return (
            A.mentions.user === m.Vf.DENY
                ? ((t = c.t.MLiD1e), (n = c.intl.string(c.t["LPJmL/"])))
                : ((t = c.t.rPNimn), (n = c.intl.string(c.t["9Oq93m"]))),
            (0, l.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, a.wZ)({ titleWithQuery: t, titleWithoutQuery: n, query: y, getQuery: (e) => `@${e}` }),
                        M,
                        s.length > 0 && o.length > 0 ? (0, l.jsx)(i.Ay.Divider, {}) : null,
                        I,
                        (s.length > 0 && u.length > 0) || (o.length > 0 && u.length > 0)
                            ? (0, l.jsx)(i.Ay.Divider, {})
                            : null,
                        N,
                    ],
                },
                "mentions",
            )
        );
    },
    onSelect(e) {
        var t, n, l, r, i, s;
        let {
                results: { users: a, globals: c, roles: d },
                index: p,
                options: y,
                channel: A,
            } = e,
            h = a[p],
            g = c[p - a.length],
            M = d[p - a.length - c.length],
            I = m.kc.MENTION;
        return (
            null != h
                ? y.insertText(
                      ((t = h.user),
                      (n = A),
                      (l = y.hidePersonalInformation),
                      o.Ay.hasSameRoleAsUsername(n, t)
                          ? `@${t.tag}`
                          : `@${u.Ay.getUserTag(t, { identifiable: l ? "never" : "always" })}`),
                      ((r = h.user), `<@${r.id}>`),
                  )
                : null != g
                  ? null != g.inlineAutocompleteType
                      ? (y.insertAutocompleteInput(g.inlineAutocompleteType),
                        "timestampMentionInput" === g.inlineAutocompleteType && (I = m.kc.TIMESTAMP))
                      : y.insertText(g.text)
                  : null != M && y.insertText(((i = M), `@${i.name}`), ((s = M), `<@&${s.id}>`)),
            { type: I }
        );
    },
};
