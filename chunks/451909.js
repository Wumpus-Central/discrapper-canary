"use strict";
n.d(t, { Ay: () => Z }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(791332),
    a = n.n(s),
    o = n(551639),
    l = n(47167),
    _ = n(159273),
    d = n(7584),
    u = n(29814),
    c = n(704726),
    E = n(335432),
    h = n(677413),
    m = n(695633),
    f = n(253932),
    g = n(734057),
    I = n(808728),
    A = n(696451),
    p = n(317525),
    T = n(71393),
    S = n(576705),
    N = n(994500),
    O = n(351906),
    R = n(287809),
    C = n(768038),
    y = n(690521),
    D = n(403362),
    L = n(562153),
    v = n(427262),
    w = n(652215),
    P = n(307731),
    b = n(985018);
function k(e, t, n, i) {
    if (t[0] !== e) return;
    let r = t.substring(e.length);
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: n } = e;
            return 1 === t.toLowerCase().indexOf(n.toLowerCase());
        })
        .sortBy((e) => {
            let { text: t } = e;
            return +(t !== r);
        })
        .map((t) => {
            let { id: n, text: r } = t;
            return [e + r, n, i];
        })
        .first();
}
function U(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function M(e) {
    return { match: a().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let G = u.A.RULES,
    x = c.Ay,
    V = /^<@!?(\d+)>/,
    F = /^<@&(\d+)>/,
    B = /^<#(\d+)>/,
    H = /^<a?:(\w+):(\d+)>/,
    Y = /(@everyone|@here|@Clyde)\b/,
    W = /^[^\s]+@[^\s]+\.[^\s.]+/,
    K = {
        link: U(a().defaultRules.link),
        autolink: U(a().defaultRules.autolink),
        url: U(a().defaultRules.url),
        inlineCode: U(G.inlineCode),
        codeBlock: U(G.codeBlock),
        rawUserMention: M(V),
        rawRoleMention: M(F),
        rawChannelMention: M(B),
        rawEmoji: M(H),
        mention: {
            match(e, t, n) {
                let i = n.split(" ").pop() + e;
                if (W.test(i)) return null;
                let r = k("@", e, t.users, "mention");
                if (null != r || null != (r = k("@", e, t.mentionableRoles, "roleMention"))) return r;
                if (
                    null ==
                    (r = k(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let s = Y.exec(e);
                if (null != s && r[0].length <= s[0].length) return null;
                if ("" === n) {
                    let t = h.U.exec(e);
                    if (null != t && r[0].length <= t[0].length) return null;
                }
                return r;
            },
            parse(e) {
                let [, t, n] = e,
                    i = "@";
                return "roleMention" === n && (i += "&"), { type: n, content: `<${i}${t}>` };
            },
        },
        channel: {
            match: (e, t) =>
                (function (e, t) {
                    if ("#" !== e[0]) return;
                    if ('"' !== e[1]) return k("#", e, t, "channel");
                    let n = 2;
                    for (; n < e.length; n++) {
                        if ("\\" === e[n]) {
                            n++;
                            continue;
                        }
                        if ('"' === e[n]) break;
                    }
                    let i = e.substring(0, n + 1),
                        r = (0, l.LG)(e.substring(2, n));
                    return t
                        .sortBy((e) => {
                            let { text: t } = e;
                            return -t.length;
                        })
                        .filter((e) => {
                            let { text: t } = e;
                            return r === t;
                        })
                        .map((e) => {
                            let { id: t } = e;
                            return [i, t, "channel"];
                        })
                        .first();
                })(e, t.channels) ?? null,
            parse: (e) => ({ type: "text", content: `<#${e[1]}>` }),
        },
        emoticon: {
            match(e, t, n) {
                if (!f.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let i = d.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == i || (i[0].length !== e.length && " " !== e[i[0].length] && "\n" !== e[i[0].length])
                    ? null
                    : i;
            },
            parse: (e) => ({ type: "emoticon", content: d.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: G.emoji.order,
            match: (e) => d.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [i, r] = e,
                    { customEmoji: s } = n,
                    a = s.get(r) ?? null;
                return null != a
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === a.animated ? "a" : ""}:${a.originalName ?? a.name}:${a.id}>`,
                          emoji: a,
                      }
                    : { type: "text", content: i };
            },
        },
        customEmoticons: {
            match: (e, t) => t.customEmoticonsRegex?.exec(e) ?? null,
            parse(e, t, n) {
                let [i, r] = e,
                    { emojiContext: s } = n,
                    a = s.getEmoticonByName(r);
                return null != a
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === a.animated ? "a" : ""}:${a.name}:${a.id}>`,
                          emoji: a,
                      }
                    : { type: "text", content: i };
            },
        },
        text: {
            ...x,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, c.VC)(t.textExclusions).exec(e)
                    : null != x.match
                      ? x.match(e, t, "")
                      : null,
        },
    },
    j = {
        inlineCode: U(G.inlineCode),
        codeBlock: U(G.codeBlock),
        mention: {
            match: a().anyScopeRegex(V),
            parse(e, t, n) {
                let { isNotification: i, guild: s, channelId: a } = n,
                    o = R.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = v.Ay.getUserTag(o, { identifiable: i && O.A.enabled ? "never" : "always" });
                if (i) {
                    let e = L.Ay.getNickname(s?.id, a, o) ?? v.Ay.getGlobalName(o);
                    return { content: null != e ? `@${e}` : `@${l}` };
                }
                {
                    if (o.bot) return { content: `@${l}` };
                    let e = "";
                    if (s?.id != null) {
                        let t = l.toLowerCase();
                        e = r().some(p.A.getUnsafeMutableRoles(s.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${o.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${l}${e}` };
                }
            },
        },
        roleMention: {
            match: a().anyScopeRegex(F),
            parse(e, t, n) {
                let { guild: i } = n;
                if (null != i) {
                    let t = p.A.getRole(i.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: a().anyScopeRegex(B),
            parse(e) {
                let t = g.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, R.default, N.A, !0, !0) };
            },
        },
        emoji: {
            match: a().anyScopeRegex(H),
            parse(e, t, n) {
                let [i, r, s] = e,
                    { guild: a } = n,
                    o = _.Ay.getDisambiguatedEmojiContext(a ? a.id : null).getById(s),
                    l = null != o ? o.name : r;
                return { content: `:${l}:`, id: s };
            },
        },
        soundboard: {
            match: a().anyScopeRegex(E.ds),
            parse(e) {
                let [t, n, i] = e;
                return { content: `<sound:${n}:${i}>` };
            },
        },
        spoiler: {
            match: a().anyScopeRegex(w.VFs),
            parse: () => ({ content: `<${b.intl.string(b.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: a().anyScopeRegex(w.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...G.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = G.timestamp.parse(...t);
                return "text" === i.type ? { content: i.content } : { content: i.formatted };
            },
        },
        text: { ...x },
    };
[K, j].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let $ = a().parserFor(K),
    z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function q(e, t, n, i) {
    let r = "",
        s = [];
    return (
        e.forEach((e) => {
            if (
                null != i &&
                ("customEmoticon" === e.type && i(e.emoji, !1), "emoticon" === e.type || "text" === e.type)
            ) {
                let n,
                    r = d.Ay.translateSurrogatesToInlineEmoji(e.content);
                for (; null !== (n = z.exec(r)); ) {
                    let r;
                    null != n[1] && "" !== n[1]
                        ? t.emojiContext && (r = t.emojiContext.getById(n[1]))
                        : (r = d.Ay.getByName(n[2])),
                        r && i(r, e.isShortcut || !1);
                }
            }
            if ("string" == typeof e.content)
                switch (e.type) {
                    case "emoji":
                        s.push({ position: r.length, length: e.content.length, id: e.id }), (r += e.content);
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                        !0 === t.isNotification ? (r += (0, o.az)(e.content)) : (r += e.content);
                        break;
                    default:
                        r += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: a, emoji: o } = q(e.content, t, n, i);
                for (let e of o) s.push({ position: r.length + e.position, length: e.length, id: e.id });
                r += a;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: r, emoji: s }
    );
}
function X(e) {
    let t,
        n = e?.getGuildId(),
        i = null != n ? T.A.getGuild(n) : null,
        s = S.A.can(w.xBc.MENTION_EVERYONE, e);
    if (e?.isPrivate()) {
        t = e.recipients.map((e) => ({ userId: e, nick: null }));
        let n = R.default.getCurrentUser();
        null != n && t.push({ userId: n.id, nick: null });
    } else
        t =
            null != n
                ? A.Ay.getMembers(n).map((e) => {
                      let { userId: t, nick: n } = e;
                      return { userId: t, nick: n };
                  })
                : [];
    let a = r()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    i = R.default.getUser(n);
                return null == i || e.push({ id: n, text: i.tag }), e;
            }, []),
        ),
        o = r()(null != i ? p.A.getSortedRoles(i.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return s || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        d = r()(I.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        u =
            null != n
                ? r()(C.L3)
                      .filter((e) => e !== I.I6)
                      .flatMap((e) =>
                          I.Ay.getChannels(n)[e].map((e) =>
                              e.channel.isCategory() && !S.A.can(w.xBc.VIEW_CHANNEL, e.channel)
                                  ? null
                                  : { id: e.channel.id, text: (0, l.m1)(e.channel, R.default, N.A) },
                          ),
                      )
                      .filter(D.Vq)
                      .value()
                : [],
        c = m.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: (0, l.m1)(e, R.default, N.A) })),
        E = _.Ay.getDisambiguatedEmojiContext(n),
        h = E.getEscapedCustomEmoticonNames(),
        f = E.getCustomEmoji(),
        g = E.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: i,
        users: a,
        channels: d.concat(u).concat(c),
        emojiContext: E,
        customEmoticonsRegex: g,
        customEmoji: f,
        textExclusions: h,
        isNotification: !1,
    };
}
function Q(e) {
    return e;
}
function J(e, t, n) {
    let i = g.A.getChannel(t),
        s = null != i ? i.getGuildId() : null,
        o = null != s ? T.A.getGuild(s) : null,
        l = n ? j : r().omit(j, ["spoiler", "timestamp"]),
        _ = n ? Q : d.Ay.translateSurrogatesToInlineEmoji,
        u = a().parserFor(l),
        c = { inline: !0, guild: o, channelId: t, isNotification: n };
    return q(u(e, c), c, _);
}
let Z = {
    parse(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            s = r ?? X(e),
            a = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (n = a.content),
            (i = (t, n) => {
                y.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: P.EmojiIntention.CHAT })
                    ? a.invalidEmojis.push(t)
                    : n || a.validNonShortcutEmojis.push(t);
            }),
            (a.content = q($(n, s), s, d.Ay.translateInlineEmojiToSurrogates, i).content),
            a
        );
    },
    parsePreprocessor: (e, t) => $(t, X(e)),
    unparse: (e, t, n) => J(e, t, n).content,
    unparseWithMeta: J,
};
