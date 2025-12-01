n.d(t, { Z: () => v }), n(35282), n(781311), n(704826);
var r = n(911969),
    i = n(10718),
    a = n(367790),
    o = n(895924),
    s = n(826298),
    l = n(588468),
    c = n(695346),
    u = n(594174),
    d = n(5192),
    f = n(417574),
    p = n(877565),
    _ = n(590921),
    m = n(24397),
    h = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function O(e) {
    let t = f.X.exec(e);
    if (null != t) {
        let n = t[1],
            r = u.default.getUser(n);
        return null != r && r.bot
            ? {
                  type: "mention",
                  cleanedQuery: e.substring(t[0].length).trim(),
                  user: r,
              }
            : null;
    }
    return null;
}
let v = y(E({}, m.Z), {
    sentinel: void 0,
    focusMode: _.QZ.MANUAL,
    matches(e, t, n, r, i) {
        if (i.commands === _.L8.DISABLED || i.commands === _.L8.OLD_BUILT_INS || n.length < 2 || !c.Xk.getSetting())
            return !1;
        let a = O(n);
        return null != a && a.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, o, l) {
        if (!c.Xk.getSetting()) return m.K;
        let u = O(n);
        if (null == u) return m.K;
        let d = (0, s.hV)(e, u.cleanedQuery),
            { commands: f, sections: p } = i.JT(
                {
                    channel: e,
                    type: "channel",
                },
                {
                    commandTypes: [r.yU.CHAT],
                    text: d.text,
                },
                {
                    limit: _.AQ,
                    placeholderCount: _.YP,
                    scoreMethod: a.p.COMMAND_OR_APPLICATION,
                    allowFetch: l,
                },
            );
        if (null == f) return m.K;
        let h = f.filter((e) => e.section.botId === u.user.id);
        if (d.hasSpaceTerminator) {
            let e = d.text.trim(),
                t = e + " ";
            h = h.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === h.length
            ? m.K
            : {
                  results: {
                      entries: h.slice(0, _.AQ).map((e) => ({
                          command: e,
                          section: null == p ? void 0 : p.find((t) => t.id === e.applicationId),
                      })),
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
            options: o,
            onHover: s,
            onClick: c,
        } = e;
        return (0, p.HI)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: c,
            titleWithQuery: h.t.HFRoZR,
            titleWithoutQuery: h.intl.string(h.t["0hKkS+"]),
            Component: o.commands === _.L8.OLD_BUILT_INS ? l.ZP.Command : l.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: i,
                    guildId: i.guild_id,
                    showImage: !0,
                    section: n,
                };
            },
            getQuery: (e) => {
                let t = O(e);
                if ("mention" !== t.type) return e;
                let n = d.ZP.getName(null == r ? void 0 : r.id, i.id, t.user);
                return e.replace(f.X, "@".concat(n));
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: r, options: i, channel: a, guild: s } = e,
            l = m.Z.onSelect({
                results: t,
                index: n,
                type: r,
                options: i,
                channel: a,
                guild: s,
                location: o.Vh.SUGGESTION,
            });
        return null == l ? null : y(E({}, l), { type: _.z2.COMMAND_SUGGESTION });
    },
});
