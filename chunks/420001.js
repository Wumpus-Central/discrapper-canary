n.d(t, { Z: () => O }), n(301563), n(566702), n(757143);
var r = n(911969),
    i = n(10718),
    o = n(367790),
    a = n(895924),
    s = n(826298),
    l = n(588468),
    c = n(695346),
    u = n(594174),
    d = n(5192),
    f = n(417574),
    _ = n(877565),
    p = n(590921),
    h = n(126226),
    m = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let t = f.X.exec(e);
    if (null != t) {
        let n = t[1],
            r = u.default.getUser(n);
        return null == r || !r.bot || r.isClyde()
            ? null
            : {
                  type: 'mention',
                  cleanedQuery: e.substring(t[0].length).trim(),
                  user: r
              };
    }
    return null;
}
let O = y(E({}, h.Z), {
    sentinel: void 0,
    focusMode: p.QZ.MANUAL,
    matches(e, t, n, r, i) {
        if (i.commands === p.L8.DISABLED || i.commands === p.L8.OLD_BUILT_INS || n.length < 2 || !c.Xk.getSetting()) return !1;
        let o = v(n);
        return null != o && o.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, a, l) {
        if (!c.Xk.getSetting()) return h.K;
        let u = v(n);
        if (null == u) return h.K;
        let d = (0, s.hV)(e, u.cleanedQuery),
            { commands: f, sections: _ } = i.JT(
                {
                    channel: e,
                    type: 'channel'
                },
                {
                    commandTypes: [r.yU.CHAT],
                    text: d.text
                },
                {
                    limit: p.AQ,
                    placeholderCount: p.YP,
                    scoreMethod: o.p.COMMAND_OR_APPLICATION,
                    allowFetch: l
                }
            );
        if (null == f) return h.K;
        let m = f.filter((e) => e.section.botId === u.user.id);
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
            guild: r,
            channel: i,
            query: o,
            options: a,
            onHover: s,
            onClick: c
        } = e;
        return (0, _.HI)({
            query: o,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: c,
            titleWithQuery: m.t.HFRoZW,
            titleWithoutQuery: m.NW.string(m.t['0hKkS0']),
            Component: a.commands === p.L8.OLD_BUILT_INS ? l.ZP.Command : l.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: i,
                    guildId: i.guild_id,
                    showImage: !0,
                    section: n
                };
            },
            getQuery: (e) => {
                let t = v(e);
                if ('mention' !== t.type) return e;
                let n = d.ZP.getName(null == r ? void 0 : r.id, i.id, t.user);
                return e.replace(f.X, '@'.concat(n));
            },
            key: 'commands'
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: r, options: i, channel: o, guild: s } = e,
            l = h.Z.onSelect({
                results: t,
                index: n,
                type: r,
                options: i,
                channel: o,
                guild: s,
                location: a.Vh.SUGGESTION
            });
        return null == l ? null : y(E({}, l), { type: p.z2.COMMAND_SUGGESTION });
    }
});
