n.d(t, { Z: () => E }), n(757143);
var i = n(911969),
    r = n(10718),
    a = n(367790),
    s = n(895924),
    o = n(826298),
    l = n(588468),
    u = n(695346),
    c = n(594174),
    d = n(5192),
    f = n(417574),
    _ = n(877565),
    p = n(590921),
    h = n(126226),
    m = n(388032);
function g(e) {
    let t = f.X.exec(e);
    if (null != t) {
        let n = t[1],
            i = c.default.getUser(n);
        return null == i || !i.bot || i.isClyde()
            ? null
            : {
                  type: 'mention',
                  cleanedQuery: e.substring(t[0].length).trim(),
                  user: i
              };
    }
    return null;
}
let E = {
    ...h.Z,
    sentinel: void 0,
    focusMode: p.QZ.MANUAL,
    matches(e, t, n, i, r) {
        if (r.commands === p.L8.DISABLED || r.commands === p.L8.OLD_BUILT_INS || n.length < 2 || !u.Xk.getSetting()) return !1;
        let a = g(n);
        return null != a && a.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, s, l) {
        if (!u.Xk.getSetting()) return h.K;
        let c = g(n);
        if (null == c) return h.K;
        let d = (0, o.hV)(e, c.cleanedQuery),
            { commands: f, sections: _ } = r.JT(
                {
                    channel: e,
                    type: 'channel'
                },
                {
                    commandTypes: [i.yU.CHAT],
                    text: d.text
                },
                {
                    limit: p.AQ,
                    placeholderCount: p.YP,
                    scoreMethod: a.p.COMMAND_OR_APPLICATION,
                    allowFetch: l
                }
            );
        if (null == f) return h.K;
        let m = f.filter((e) => e.section.botId === c.user.id);
        if (d.hasSpaceTerminator) {
            let e = d.text.trim(),
                t = e + ' ';
            m = m.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === m.length
            ? h.K
            : {
                  results: {
                      entries: m.slice(0, p.AQ).map((e) => ({
                          command: e,
                          section: null == _ ? void 0 : _.find((t) => t.id === e.applicationId)
                      }))
                  }
              };
    },
    renderResults(e) {
        let {
            results: { entries: t },
            selectedIndex: n,
            guild: i,
            channel: r,
            query: a,
            options: s,
            onHover: o,
            onClick: u
        } = e;
        return (0, _.HI)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: u,
            titleWithQuery: m.t.HFRoZW,
            titleWithoutQuery: m.intl.string(m.t['0hKkS0']),
            Component: s.commands === p.L8.OLD_BUILT_INS ? l.ZP.Command : l.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: r,
                    guildId: r.guild_id,
                    showImage: !0,
                    section: n
                };
            },
            getQuery: (e) => {
                let t = g(e);
                if ('mention' !== t.type) return e;
                let n = d.ZP.getName(null == i ? void 0 : i.id, r.id, t.user);
                return e.replace(f.X, '@'.concat(n));
            },
            key: 'commands'
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: i, options: r, channel: a, guild: o } = e,
            l = h.Z.onSelect({
                results: t,
                index: n,
                type: i,
                options: r,
                channel: a,
                guild: o,
                location: s.Vh.SUGGESTION
            });
        return null == l
            ? null
            : {
                  ...l,
                  type: p.z2.COMMAND_SUGGESTION
              };
    }
};
