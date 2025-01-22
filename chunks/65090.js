var i = r(200651),
    a = r(192379),
    o = r(588468),
    s = r(271383),
    l = r(483360),
    u = r(51144),
    c = r(877565),
    d = r(590921),
    f = r(665692),
    p = r(388032);
let h = {
    sentinel: f.ME,
    stores: [s.ZP],
    matches: (e, n, r, i, a) => (a.mentions.user !== d.h3.DENY || a.mentions.role !== d.Fw.DENY || a.mentions.global !== d.VV.DENY) && !0,
    queryResults(e, n, r, i, a) {
        let o = i.mentions.global === d.VV.ALLOW_EVERYONE || i.mentions.global === d.VV.ALLOW_EVERYONE_OR_HERE,
            s = i.mentions.global === d.VV.ALLOW_EVERYONE_OR_HERE,
            u = i.mentions.user !== d.h3.DENY,
            c = i.mentions.role !== d.Fw.DENY,
            f = i.mentions.user === d.h3.ALLOW_GUILD,
            p = i.mentions.role === d.Fw.ALLOW_ALL;
        return {
            results: l.ZP.queryMentionResults({
                query: r,
                channel: e,
                canMentionEveryone: o,
                canMentionHere: s,
                canMentionUsers: u,
                canMentionRoles: c,
                includeAllGuildUsers: f,
                includeNonMentionableRoles: p,
                request: a
            })
        };
    },
    renderResults(e) {
        let n,
            r,
            {
                results: { users: s, globals: l, roles: u },
                selectedIndex: h,
                channel: _,
                query: m,
                options: g,
                onHover: E,
                onClick: v
            } = e,
            y = s.map((e, n) =>
                (0, i.jsx)(
                    o.ZP.User,
                    {
                        guildId: _.guild_id,
                        onClick: v,
                        onHover: E,
                        selected: h === n,
                        index: n,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: g.hidePersonalInformation
                    },
                    e.user.id
                )
            ),
            b = l.map((e, n) =>
                (0, i.jsx)(
                    o.ZP.Generic,
                    {
                        onClick: v,
                        onHover: E,
                        selected: h === n + s.length,
                        index: s.length + n,
                        text: e.text,
                        description: g.hideMentionDescription ? null : e.description,
                        'aria-label': e.text
                    },
                    e.text
                )
            ),
            I = u.map((e, n) =>
                (0, i.jsx)(
                    o.ZP.Role,
                    {
                        onClick: v,
                        onHover: E,
                        selected: h === n + s.length + l.length,
                        index: s.length + l.length + n,
                        role: e,
                        hideDescription: g.hideMentionDescription
                    },
                    e.id
                )
            );
        return (
            g.mentions.user === d.h3.DENY ? ((n = p.t.MLiD1d), (r = p.intl.string(p.t.LPJmLy))) : ((n = p.t.rPNimp), (r = p.intl.string(p.t['9Oq93t']))),
            (0, i.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, c.gm)({
                            titleWithQuery: n,
                            titleWithoutQuery: r,
                            query: m,
                            getQuery: (e) => ''.concat(f.ME).concat(e)
                        }),
                        y,
                        s.length > 0 && l.length > 0 ? (0, i.jsx)(o.ZP.Divider, {}) : null,
                        b,
                        (s.length > 0 && u.length > 0) || (l.length > 0 && u.length > 0) ? (0, i.jsx)(o.ZP.Divider, {}) : null,
                        I
                    ]
                },
                'mentions'
            )
        );
    },
    onSelect(e) {
        let {
                results: { users: n, globals: r, roles: i },
                index: a,
                options: o,
                channel: s
            } = e,
            l = n[a],
            u = r[a - n.length],
            c = i[a - n.length - r.length];
        return null != l ? o.insertText(_(l.user, s, o.hidePersonalInformation), m(l.user)) : null != u ? o.insertText(g(u)) : null != c && o.insertText(E(c), v(c)), { type: d.z2.MENTION };
    }
};
function _(e, n, r) {
    return l.ZP.hasSameRoleAsUsername(n, e) ? ''.concat(f.ME).concat(e.tag) : ''.concat(f.ME).concat(u.ZP.getUserTag(e, { identifiable: r ? 'never' : 'always' }));
}
function m(e) {
    return '<@'.concat(e.id, '>');
}
function g(e) {
    return e.text;
}
function E(e) {
    return ''.concat(f.ME).concat(e.name);
}
function v(e) {
    return '<@&'.concat(e.id, '>');
}
n.Z = h;
