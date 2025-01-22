var i = r(757143);
var a = r(911969),
    o = r(10718),
    s = r(367790),
    l = r(895924),
    u = r(826298),
    c = r(588468),
    d = r(695346),
    f = r(594174),
    p = r(5192),
    h = r(417574),
    _ = r(877565),
    m = r(590921),
    g = r(126226),
    E = r(388032);
function v(e) {
    let n = h.X.exec(e);
    if (null != n) {
        let r = n[1],
            i = f.default.getUser(r);
        return null == i || !i.bot || i.isClyde()
            ? null
            : {
                  type: 'mention',
                  cleanedQuery: e.substring(n[0].length).trim(),
                  user: i
              };
    }
    return null;
}
let y = {
    ...g.Z,
    sentinel: void 0,
    focusMode: m.QZ.MANUAL,
    matches(e, n, r, i, a) {
        if (a.commands === m.L8.DISABLED || a.commands === m.L8.OLD_BUILT_INS || r.length < 2 || !d.Xk.getSetting()) return !1;
        let o = v(r);
        return null != o && o.cleanedQuery.length > 0;
    },
    queryResults(e, n, r, i, l) {
        if (!d.Xk.getSetting()) return g.K;
        let c = v(r);
        if (null == c) return g.K;
        let f = (0, u.hV)(e, c.cleanedQuery),
            { commands: p, sections: h } = o.JT(
                e,
                {
                    commandTypes: [a.yU.CHAT],
                    text: f.text
                },
                {
                    limit: m.AQ,
                    placeholderCount: m.YP,
                    scoreMethod: s.p.COMMAND_OR_APPLICATION,
                    allowFetch: l
                }
            );
        if (null == p) return g.K;
        let _ = p.filter((e) => e.section.botId === c.user.id);
        if (f.hasSpaceTerminator) {
            let e = f.text.trim(),
                n = e + ' ';
            _ = _.filter((r) => r.untranslatedName === e || r.untranslatedName.startsWith(n));
        }
        return 0 === _.length
            ? g.K
            : {
                  results: {
                      entries: _.slice(0, m.AQ).map((e) => ({
                          command: e,
                          section: null == h ? void 0 : h.find((n) => n.id === e.applicationId)
                      }))
                  }
              };
    },
    renderResults(e) {
        let {
            results: { entries: n },
            selectedIndex: r,
            guild: i,
            channel: a,
            query: o,
            options: s,
            onHover: l,
            onClick: u
        } = e;
        return (0, _.HI)({
            query: o,
            selectedIndex: r,
            autocompletes: n,
            onHover: l,
            onClick: u,
            titleWithQuery: E.t.HFRoZW,
            titleWithoutQuery: E.intl.string(E.t['0hKkS0']),
            Component: s.commands === m.L8.OLD_BUILT_INS ? c.ZP.Command : c.ZP.NewCommand,
            getProps: (e) => {
                let { command: n, section: r } = e;
                return {
                    key: n.id,
                    command: n,
                    channel: a,
                    guildId: a.guild_id,
                    showImage: !0,
                    section: r
                };
            },
            getQuery: (e) => {
                let n = v(e);
                if ('mention' !== n.type) return e;
                let r = p.ZP.getName(null == i ? void 0 : i.id, a.id, n.user);
                return e.replace(h.X, '@'.concat(r));
            },
            key: 'commands'
        });
    },
    onSelect(e) {
        let { results: n, index: r, type: i, options: a, channel: o, guild: s } = e,
            u = g.Z.onSelect({
                results: n,
                index: r,
                type: i,
                options: a,
                channel: o,
                guild: s,
                location: l.Vh.SUGGESTION
            });
        return null == u
            ? null
            : {
                  ...u,
                  type: m.z2.COMMAND_SUGGESTION
              };
    }
};
n.Z = y;
