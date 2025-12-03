n.d(t, {
    BL: () => p,
    ZP: () => E,
    m1: () => _,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(588468),
    o = n(271383),
    s = n(483360),
    l = n(51144),
    c = n(877565),
    u = n(590921),
    d = n(761652),
    f = n(388032);
function p(e, t, n) {
    return s.ZP.hasSameRoleAsUsername(t, e)
        ? "".concat(d.ME).concat(e.tag)
        : "".concat(d.ME).concat(l.ZP.getUserTag(e, { identifiable: n ? "never" : "always" }));
}
function _(e) {
    return "<@".concat(e.id, ">");
}
function m(e) {
    return e.text;
}
function h(e) {
    return "".concat(d.ME).concat(e.name);
}
function g(e) {
    return "<@&".concat(e.id, ">");
}
let E = {
    sentinel: d.ME,
    stores: [o.ZP],
    matches: (e, t, n, r, i) =>
        i.mentions.user !== u.h3.DENY || i.mentions.role !== u.Fw.DENY || i.mentions.global !== u.VV.DENY,
    queryResults(e, t, n, r, i) {
        let a = r.mentions.global === u.VV.ALLOW_EVERYONE || r.mentions.global === u.VV.ALLOW_EVERYONE_OR_HERE,
            o = r.mentions.global === u.VV.ALLOW_EVERYONE_OR_HERE,
            l = r.mentions.user !== u.h3.DENY,
            c = r.mentions.role !== u.Fw.DENY,
            d = r.mentions.user === u.h3.ALLOW_GUILD,
            f = r.mentions.role === u.Fw.ALLOW_ALL;
        return {
            results: s.ZP.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: a,
                canMentionHere: o,
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
                results: { users: o, globals: s, roles: l },
                selectedIndex: p,
                channel: _,
                query: m,
                options: h,
                onHover: g,
                onClick: E,
            } = e,
            b = o.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.User,
                    {
                        guildId: _.guild_id,
                        onClick: E,
                        onHover: g,
                        selected: p === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: h.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            y = s.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Generic,
                    {
                        onClick: E,
                        onHover: g,
                        selected: p === t + o.length,
                        index: o.length + t,
                        text: e.text,
                        description: h.hideMentionDescription ? null : e.description,
                        "aria-label": e.text,
                        badge: "@game" === e.text || "@time" === e.text ? "new" : void 0,
                    },
                    e.text,
                ),
            ),
            O = l.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Role,
                    {
                        onClick: E,
                        onHover: g,
                        selected: p === t + o.length + s.length,
                        index: o.length + s.length + t,
                        role: e,
                        hideDescription: h.hideMentionDescription,
                        guildId: _.guild_id,
                    },
                    e.id,
                ),
            );
        return (
            h.mentions.user === u.h3.DENY
                ? ((t = f.t.MLiD1e), (n = f.intl.string(f.t["LPJmL/"])))
                : ((t = f.t.rPNimn), (n = f.intl.string(f.t["9Oq93m"]))),
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, c.gm)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: m,
                            getQuery: (e) => "".concat(d.ME).concat(e),
                        }),
                        b,
                        o.length > 0 && s.length > 0 ? (0, r.jsx)(a.ZP.Divider, {}) : null,
                        y,
                        (o.length > 0 && l.length > 0) || (s.length > 0 && l.length > 0)
                            ? (0, r.jsx)(a.ZP.Divider, {})
                            : null,
                        O,
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
                channel: o,
            } = e,
            s = t[i],
            l = n[i - t.length],
            c = r[i - t.length - n.length],
            d = u.z2.MENTION;
        return (
            null != s
                ? a.insertText(p(s.user, o, a.hidePersonalInformation), _(s.user))
                : null != l
                  ? null != l.inlineAutocompleteType
                      ? (a.insertAutocompleteInput(l.inlineAutocompleteType),
                        (d = "timestampMentionInput" === l.inlineAutocompleteType ? u.z2.TIMESTAMP : u.z2.GAME_MENTION))
                      : a.insertText(m(l))
                  : null != c && a.insertText(h(c), g(c)),
            { type: d }
        );
    },
};
