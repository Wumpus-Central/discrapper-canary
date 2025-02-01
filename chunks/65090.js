n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(588468),
    s = n(271383),
    o = n(483360),
    l = n(51144),
    u = n(877565),
    c = n(590921),
    d = n(665692),
    f = n(388032);
function _(e, t, n) {
    return o.ZP.hasSameRoleAsUsername(t, e) ? ''.concat(d.ME).concat(e.tag) : ''.concat(d.ME).concat(l.ZP.getUserTag(e, { identifiable: n ? 'never' : 'always' }));
}
function p(e) {
    return '<@'.concat(e.id, '>');
}
function h(e) {
    return e.text;
}
function m(e) {
    return ''.concat(d.ME).concat(e.name);
}
function g(e) {
    return '<@&'.concat(e.id, '>');
}
let E = {
    sentinel: d.ME,
    stores: [s.ZP],
    matches: (e, t, n, i, r) => r.mentions.user !== c.h3.DENY || r.mentions.role !== c.Fw.DENY || r.mentions.global !== c.VV.DENY,
    queryResults(e, t, n, i, r) {
        let a = i.mentions.global === c.VV.ALLOW_EVERYONE || i.mentions.global === c.VV.ALLOW_EVERYONE_OR_HERE,
            s = i.mentions.global === c.VV.ALLOW_EVERYONE_OR_HERE,
            l = i.mentions.user !== c.h3.DENY,
            u = i.mentions.role !== c.Fw.DENY,
            d = i.mentions.user === c.h3.ALLOW_GUILD,
            f = i.mentions.role === c.Fw.ALLOW_ALL;
        return {
            results: o.ZP.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: a,
                canMentionHere: s,
                canMentionUsers: l,
                canMentionRoles: u,
                includeAllGuildUsers: d,
                includeNonMentionableRoles: f,
                request: r
            })
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: s, globals: o, roles: l },
                selectedIndex: _,
                channel: p,
                query: h,
                options: m,
                onHover: g,
                onClick: E
            } = e,
            v = s.map((e, t) =>
                (0, i.jsx)(
                    a.ZP.User,
                    {
                        guildId: p.guild_id,
                        onClick: E,
                        onHover: g,
                        selected: _ === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: m.hidePersonalInformation
                    },
                    e.user.id
                )
            ),
            y = o.map((e, t) =>
                (0, i.jsx)(
                    a.ZP.Generic,
                    {
                        onClick: E,
                        onHover: g,
                        selected: _ === t + s.length,
                        index: s.length + t,
                        text: e.text,
                        description: m.hideMentionDescription ? null : e.description,
                        'aria-label': e.text
                    },
                    e.text
                )
            ),
            I = l.map((e, t) =>
                (0, i.jsx)(
                    a.ZP.Role,
                    {
                        onClick: E,
                        onHover: g,
                        selected: _ === t + s.length + o.length,
                        index: s.length + o.length + t,
                        role: e,
                        hideDescription: m.hideMentionDescription
                    },
                    e.id
                )
            );
        return (
            m.mentions.user === c.h3.DENY ? ((t = f.t.MLiD1d), (n = f.intl.string(f.t.LPJmLy))) : ((t = f.t.rPNimp), (n = f.intl.string(f.t['9Oq93t']))),
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, u.gm)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: h,
                            getQuery: (e) => ''.concat(d.ME).concat(e)
                        }),
                        v,
                        s.length > 0 && o.length > 0 ? (0, i.jsx)(a.ZP.Divider, {}) : null,
                        y,
                        (s.length > 0 && l.length > 0) || (o.length > 0 && l.length > 0) ? (0, i.jsx)(a.ZP.Divider, {}) : null,
                        I
                    ]
                },
                'mentions'
            )
        );
    },
    onSelect(e) {
        let {
                results: { users: t, globals: n, roles: i },
                index: r,
                options: a,
                channel: s
            } = e,
            o = t[r],
            l = n[r - t.length],
            u = i[r - t.length - n.length];
        return null != o ? a.insertText(_(o.user, s, a.hidePersonalInformation), p(o.user)) : null != l ? a.insertText(h(l)) : null != u && a.insertText(m(u), g(u)), { type: c.z2.MENTION };
    }
};
