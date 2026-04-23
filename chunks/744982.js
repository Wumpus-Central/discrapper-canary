n.d(t, { A: () => M });
var l = n(155718),
    r = n(842209),
    i = n(210978),
    s = n(392054),
    o = n(664929),
    u = n(580424),
    a = n(253932),
    m = n(287809),
    c = n(562153),
    d = n(362562),
    p = n(634788),
    y = n(374803),
    A = n(114323),
    h = n(985018);
function g(e) {
    let t = d.z.exec(e);
    if (null != t) {
        let n = t[1],
            l = m.default.getUser(n);
        return null != l && l.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: l } : null;
    }
    return null;
}
let M = {
    ...A.A,
    sentinel: void 0,
    focusMode: y.e.MANUAL,
    matches(e, t, n, l, r) {
        if (r.commands === y.Ze.DISABLED || r.commands === y.Ze.OLD_BUILT_INS || n.length < 2 || !a._3.getSetting())
            return !1;
        let i = g(n);
        return null != i && i.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, s, u) {
        if (!a._3.getSetting()) return A.f;
        let m = g(n);
        if (null == m) return A.f;
        let c = (0, o.Yn)(e, m.cleanedQuery),
            { commands: d, sections: p } = r.eW(
                { channel: e, type: "channel" },
                { commandTypes: [l.kc.CHAT], text: c.text },
                { limit: 20, placeholderCount: 3, scoreMethod: i.M.COMMAND_OR_APPLICATION, allowFetch: u },
            );
        if (null == d) return A.f;
        let y = d.filter((e) => e.section.botId === m.user.id);
        if (c.hasSpaceTerminator) {
            let e = c.text.trim(),
                t = e + " ";
            y = y.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === y.length
            ? A.f
            : {
                  results: {
                      entries: y
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: p?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
            results: { entries: t },
            selectedIndex: n,
            guild: l,
            channel: r,
            query: i,
            options: s,
            onHover: o,
            onClick: a,
        } = e;
        return (0, p.GM)({
            query: i,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: a,
            titleWithQuery: h.t.HFRoZR,
            titleWithoutQuery: h.intl.string(h.t["0hKkS+"]),
            Component: s.commands === y.Ze.OLD_BUILT_INS ? u.Ay.Command : u.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: r, guildId: r.guild_id, showImage: !0, section: n };
            },
            getQuery: (e) => {
                let t = g(e);
                if ("mention" !== t.type) return e;
                let n = c.Ay.getName(l?.id, r.id, t.user);
                return e.replace(d.z, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: l, options: r, channel: i, guild: o } = e,
            u = A.A.onSelect({
                results: t,
                index: n,
                type: l,
                options: r,
                channel: i,
                guild: o,
                location: s.Oh.SUGGESTION,
            });
        return null == u ? null : { ...u, type: y.kc.COMMAND_SUGGESTION };
    },
};
