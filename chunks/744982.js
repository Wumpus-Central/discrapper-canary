"use strict";
n.d(t, { A: () => E });
var r = n(155718),
    i = n(842209),
    a = n(210978),
    s = n(392054),
    o = n(664929),
    l = n(580424),
    u = n(253932),
    c = n(287809),
    d = n(562153),
    _ = n(362562),
    f = n(634788),
    p = n(374803),
    h = n(114323),
    m = n(985018);
function g(e) {
    let t = _.z.exec(e);
    if (null != t) {
        let n = t[1],
            r = c.default.getUser(n);
        return null != r && r.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: r } : null;
    }
    return null;
}
let E = {
    ...h.A,
    sentinel: void 0,
    focusMode: p.e.MANUAL,
    matches(e, t, n, r, i) {
        if (i.commands === p.Ze.DISABLED || i.commands === p.Ze.OLD_BUILT_INS || n.length < 2 || !u._3.getSetting())
            return !1;
        let a = g(n);
        return null != a && a.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, s, l) {
        if (!u._3.getSetting()) return h.f;
        let c = g(n);
        if (null == c) return h.f;
        let d = (0, o.Yn)(e, c.cleanedQuery),
            { commands: _, sections: f } = i.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: d.text },
                { limit: 20, placeholderCount: 3, scoreMethod: a.M.COMMAND_OR_APPLICATION, allowFetch: l },
            );
        if (null == _) return h.f;
        let p = _.filter((e) => e.section.botId === c.user.id);
        if (d.hasSpaceTerminator) {
            let e = d.text.trim(),
                t = e + " ";
            p = p.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === p.length
            ? h.f
            : {
                  results: {
                      entries: p
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: f?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
            results: { entries: t },
            selectedIndex: n,
            guild: r,
            channel: i,
            query: a,
            options: s,
            onHover: o,
            onClick: u,
        } = e;
        return (0, f.GM)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: u,
            titleWithQuery: m.t.HFRoZR,
            titleWithoutQuery: m.intl.string(m.t["0hKkS+"]),
            Component: s.commands === p.Ze.OLD_BUILT_INS ? l.Ay.Command : l.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: i, guildId: i.guild_id, showImage: !0, section: n };
            },
            getQuery: (e) => {
                let t = g(e);
                if ("mention" !== t.type) return e;
                let n = d.Ay.getName(r?.id, i.id, t.user);
                return e.replace(_.z, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: r, options: i, channel: a, guild: o } = e,
            l = h.A.onSelect({
                results: t,
                index: n,
                type: r,
                options: i,
                channel: a,
                guild: o,
                location: s.Oh.SUGGESTION,
            });
        return null == l ? null : { ...l, type: p.kc.COMMAND_SUGGESTION };
    },
};
