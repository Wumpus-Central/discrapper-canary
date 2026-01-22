n.d(t, { A: () => A }), n(747238), n(733351), n(812715);
var r = n(155718),
    i = n(842209),
    a = n(210978),
    s = n(392054),
    o = n(664929),
    l = n(580424),
    c = n(253932),
    u = n(287809),
    d = n(562153),
    f = n(362562),
    p = n(634788),
    _ = n(374803),
    h = n(114323),
    m = n(985018);
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
    let t = f.z.exec(e);
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
let A = y(E({}, h.A), {
    sentinel: void 0,
    focusMode: _.e.MANUAL,
    matches(e, t, n, r, i) {
        if (i.commands === _.Ze.DISABLED || i.commands === _.Ze.OLD_BUILT_INS || n.length < 2 || !c._3.getSetting())
            return !1;
        let a = O(n);
        return null != a && a.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, s, l) {
        if (!c._3.getSetting()) return h.f;
        let u = O(n);
        if (null == u) return h.f;
        let d = (0, o.Yn)(e, u.cleanedQuery),
            { commands: f, sections: p } = i.eW(
                {
                    channel: e,
                    type: "channel",
                },
                {
                    commandTypes: [r.kc.CHAT],
                    text: d.text,
                },
                {
                    limit: 20,
                    placeholderCount: 3,
                    scoreMethod: a.M.COMMAND_OR_APPLICATION,
                    allowFetch: l,
                },
            );
        if (null == f) return h.f;
        let _ = f.filter((e) => e.section.botId === u.user.id);
        if (d.hasSpaceTerminator) {
            let e = d.text.trim(),
                t = e + " ";
            _ = _.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === _.length
            ? h.f
            : {
                  results: {
                      entries: _.slice(0, 20).map((e) => ({
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
            options: s,
            onHover: o,
            onClick: c,
        } = e;
        return (0, p.GM)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: c,
            titleWithQuery: m.t.HFRoZR,
            titleWithoutQuery: m.intl.string(m.t["0hKkS+"]),
            Component: s.commands === _.Ze.OLD_BUILT_INS ? l.Ay.Command : l.Ay.NewCommand,
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
                let n = d.Ay.getName(null == r ? void 0 : r.id, i.id, t.user);
                return e.replace(f.z, "@".concat(n));
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
        return null == l ? null : y(E({}, l), { type: _.kc.COMMAND_SUGGESTION });
    },
});
